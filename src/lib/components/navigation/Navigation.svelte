<script lang="ts" context="module">
    import {getItemSrc} from "$lib/textures.js";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";

    const checkNavIcon = (iconSrc: string, textureStore: App.TextureDictionary) => {
        if(iconSrc.includes("spell_book") || notDisplayableItems.includes(iconSrc)) {
            return undefined;
        }
        if(iconSrc.includes("glyph_")) {
            return getItemSrc(iconSrc.replace("glyph_", ""), textureStore);
        }

        return getItemSrc(iconSrc, textureStore);
    }
</script>

<script lang="ts">
    import {currentExpandedCategory, storeCurrentUrl} from '$lib/stores/uiState.js';
    import {patchouliStore} from '$lib/stores/fileStore';
    import {storeMobileDrawer} from '$lib/stores/uiState';
    import {AccordionGroup, AccordionItem} from '@brainandbones/skeleton';
    import {afterNavigate} from '$app/navigation';
    import {scrollSelectionIntoView} from "$lib/components/navigation/scrollHelper";
    import Label from "$lib/components/Label.svelte";
    import {texturesStore} from "$lib/stores/fileStore.js";

    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        storeMobileDrawer.set(false);
    }

    $: sortedCategories = Object.values($patchouliStore)
        .filter(category => !!category.entries)
        .sort((categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum);
    afterNavigate(() => {
        scrollSelectionIntoView();
    })
</script>

<style>
    .navIcon {
        width: 50px;
        height: 50px;
        image-rendering: pixelated;
    }
</style>

<div class="mb-8 {$$props.class || ''}">
    <AccordionGroup>
    {#each sortedCategories as category, i}
        <AccordionItem open={$currentExpandedCategory === category.id}>
            <svelte:fragment slot="lead">
                {@const iconSrc = checkNavIcon(category.icon, $texturesStore)}
                {#if iconSrc}
                    <img alt={`Icon for category ${category.name}`} src={iconSrc} class="navIcon"/>
                {:else }
                    <div class="navIcon"/>
                {/if}
            </svelte:fragment>
            <svelte:fragment slot="summary">
                <div class="text-primary-500 font-bold uppercase">
                    <a href={`/category/${category.id}`} class="no-underline text-primary-500">
                        <Label label={category.name}/>
                    </a>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <nav class="list-nav">
                    <ul>
                        {#each Object.entries(category.entries) as [id, entry]}
                            {@const href=`/category/${entry.category}/entry/${id}`}
                            <li>
                                <a {href} on:click={onListItemClick} class:navSelected={$storeCurrentUrl === href}>
                                    <span class="flex-auto">
                                        <Label label={entry.name}/>
                                    </span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </svelte:fragment>
        </AccordionItem>
    {/each}
    </AccordionGroup>
</div>
