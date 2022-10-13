<script lang="ts">
    import {Drawer} from '@brainandbones/skeleton';
    import {storeMobileDrawer} from '$lib/stores/uiState.js';
    import Navigation from '$lib/components/navigation/Navigation.svelte';
    import LanguageSelection from "$lib/components/LanguageSelection.svelte";
    import SmartSearch from "$lib/components/Search/SmartSearch.svelte";
    import {browser} from "$app/environment";
    import AddonMenu from "$lib/components/AddonMenu.svelte";
</script>

<Drawer display="lg:hidden" open={storeMobileDrawer}>
    <div class="p-2">
        <LanguageSelection/>
    </div>
    {#if browser}
        <div class="p-2">
            <SmartSearch mobile={true}/>
        </div>
        <div class="p-2">
            <AddonMenu mobile={true}/>
        </div>
    {/if}
    <Navigation embedded={true}/>
</Drawer>
