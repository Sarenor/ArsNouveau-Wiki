<script lang="ts">
    import {ListBox, ListBoxItem, menu} from '@brainandbones/skeleton';
    import {selectedAddonStore} from "$lib/stores/addonStore.js";
    import {subscribeToAddonStore} from "$lib/setup/loadAddonFiles";
    import {onMount} from "svelte";
    import {browser} from '$app/environment';

    onMount(() => {
        if (browser) {
            return subscribeToAddonStore()
        }
    });

    export let mobile: boolean
    const elementalIcons = ['/air_focus.png', '/fire_focus.png', '/water_focus.png', '/earth_focus.png']
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
            <ListBoxItem value={'ars_elemental'}>
                <img alt="The Ars Elemental Logo" slot="lead" src={elementalIcons[Math. floor(Math. random() * (4))]}/>
                Ars Elemental
            </ListBoxItem>
            <ListBoxItem value={'ars_gears'}>
                <img alt="The Ars G.E.A.R.S Logo" slot="lead" src="/arcane_combat_gear.png"/>
                Ars G.E.A.R.S
            </ListBoxItem>
            <ListBoxItem value={'ars_instrumentum'}>
                <img alt="The Ars Instrumentum Logo" slot="lead" src="/wizards_armarium.png"/>
                Ars Instrumentum
            </ListBoxItem>
            <ListBoxItem value={'ars_omega'}>
                <img alt="The Ars Omega Logo" slot="lead" src="/demonic_crystal.png"/>
                Ars Omega
            </ListBoxItem>
            <ListBoxItem value={'ars_scalaes'}>
                <img alt="The Ars Scalaes Logo" slot="lead" src="/scalaes.png"/>
                Ars Scalaes
            </ListBoxItem>
            <ListBoxItem value={'too_many_glyphs'}>
                <img alt="The Too Many Glyphs Logo" slot="lead" src="/chaining.png"/>
                Too Many Glyphs
            </ListBoxItem>
        </ListBox>
    </div>
</span>