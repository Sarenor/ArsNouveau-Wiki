<script lang="ts">
	import { AppBar, drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
	import { scrollSelectionIntoView } from '$lib/components/navigation/scrollHelper';
	import SmartSearch from '$lib/components/Search/SmartSearch.svelte';
	import LanguageSelection from '$lib/components/LanguageSelection.svelte';
	import AddonMenu from '$lib/components/addonMenu/AddonMenu.svelte';

	// Drawer Handler
	function drawerOpen(): void {
		drawerStore.open();
		scrollSelectionIntoView();
	}
</script>

<style>
    @keyframes starbuncleRun {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(500%);
        }
    }

    .buncle-container {
        position: relative;
        overflow: hidden;
        height: 50px;
				flex-grow: 1;
    }

    .buncle {
        position: absolute;
        animation: starbuncleRun 6s linear infinite;
        height: 45px;
    }
</style>

<AppBar>
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<div class="lg:hidden mr-2 p-1 cursor-pointer" on:click={drawerOpen} on:keypress={drawerOpen}>
			<MenuIcon style="width: 20px; height: 20px; fill: rgb(var(--color-primary-500))" />
		</div>
		<LightSwitch origin="tr" />
	</svelte:fragment>
	<div class="flex flex-row">
		<a
			class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4"
			href="/"
			id="ars_nouveau_wiki"
			title="Return to main page">Ars Nouveau Wiki</a
		>
		<div class="buncle-container">
			<img src="/runningbuncle/starbuncle_run_purple_border.gif" alt="animated running Starbuncle" class="buncle" />
		</div>
	</div>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<AddonMenu />
		</div>
		<div class="hidden lg:block">
			<LanguageSelection />
		</div>
		<div class="hidden lg:block">
			{#await Promise.resolve()}
				<div class="placeholder animate-pulse w-52" style="height: 2.5rem" />
			{:then irrelevant}
				<SmartSearch />
			{/await}
		</div>
	</svelte:fragment>
</AppBar>
