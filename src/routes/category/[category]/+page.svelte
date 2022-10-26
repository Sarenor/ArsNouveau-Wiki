<script lang="ts">
    import {patchouliStore} from '$lib/stores/fileStore';
    import Label from "$lib/components/Label.svelte";
    import {labelStore} from "$lib/stores/languageStore";
    import {currentExpandedCategory} from "$lib/stores/uiState";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    $: displayedCategory = $patchouliStore[data?.category];
    $: categoryName = $labelStore(displayedCategory?.name);
    $: $currentExpandedCategory = data?.category ? data.category : $currentExpandedCategory
</script>

<svelte:head><title>{categoryName}</title></svelte:head>

<h2 class="text-center"><Label label={displayedCategory.name}/></h2>
<div class="flex flex-col justify-start items-center h-full m-4">
    <p><Label label={displayedCategory.description}/></p>
</div>
