<script lang="ts">
    import {ListBox, ListBoxItem, menu} from '@brainandbones/skeleton';
    import {selectedAddonStore} from "$lib/stores/addonStore.js";
    import {subscribeToAddonStore} from "$lib/setup/loadAddonFiles";
    import {onMount} from "svelte";
    import {browser} from '$app/environment';
    import {addonList, modInformations} from "$lib/utils/modInformations.js";

    onMount(() => {
        if (browser) {
            return subscribeToAddonStore()
        }
    });

    export let mobile: boolean
</script>

<style>
    img {
        height: 30px;
        width: 30px;
        image-rendering: pixelated;
    }
</style>

<span class="relative">
    <button class="btn bg-surface-400 btn-base text-primary-500"
            use:menu={{ menu: 'addonMenu', interactive: true, fixed: mobile }}>
        Addon Selection
    </button>
    <div class="card card-body" class:menu-tl={mobile} data-menu="addonMenu" style="width: 240px">
        <ListBox selected={selectedAddonStore}>
            {#each addonList as addon}
                <ListBoxItem value={addon}>
                    <img alt={`The ${modInformations[addon].name} Logo`} slot="lead" src={modInformations[addon].icon}/>
                    {modInformations[addon].name}
                </ListBoxItem>
            {/each}
        </ListBox>
    </div>
</span>