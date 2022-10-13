<script context="module" lang="ts">
    import {getTexture} from "$lib/textures";
    import {getIdFromResourceLocation} from "$lib/utils/idResolver";

    const mapSpecialNames = (name: string) => {
        if (name === 'ars_nouveau:magebloom_crop') {
            return 'magebloom_seed';
        }
        return name;
    }

    const getItemSrc = (item: string, textures: App.TextureDictionary) => {
        let src = getTexture(mapSpecialNames(item), textures)
        const itemId = getIdFromResourceLocation(item);
        if (src === 'Unknown Texture') {
            if (['clock', 'compass'].includes(itemId)) {
                src = `/minecraft/textures/item/${itemId}_12.png`
            } else {
                src = `/minecraft/textures/item/${itemId}.png`
            }
        }
        return src;
    }
</script>

<script lang="ts">
    import {texturesStore} from "$lib/stores/fileStore";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";
    import {getBlockOrItemLabel} from "$lib/languages";
    import {labelStore} from "$lib/stores/languageStore";
    import {modlist} from "$lib/utils/modInformations";

    export let item: string;

    const getDisplayText = (item: string) => {
        if (notDisplayableItems.includes(item)) {
            const splitItem = item.split(":");
            if (modlist.includes(splitItem[0])) {
                return getBlockOrItemLabel(splitItem[1]);
            } else {
                return $labelStore(`block.minecraft.${splitItem[1]}`);
            }
        } else {
            return getBlockOrItemLabel(item);
        }
    }

    $: src = item ? getItemSrc(item, $texturesStore) : 'missingitem';
    $: displayText = item ? getDisplayText(item) : 'missingitem';
    $: showImage = !notDisplayableItems.includes(item);
</script>

<div class="self-center flex flex-col items-center justify-center craftingGridItem">
    {#if showImage}
        <img alt={`picture of the ingredient ${item}`} {src} class="craftingGridPicture"/>
    {/if}
    <span class="text-center break-words w-full">{displayText}</span>
</div>