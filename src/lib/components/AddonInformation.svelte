<script lang="ts">
    import {tooltip} from '@skeletonlabs/skeleton';
    import {modInformations} from "$lib/utils/modInformations";

    export let addonName: string;
    export let position = "top";
</script>

<style>
    .sourceIcon {
        width: 30px;
        height: 30px;
        image-rendering: pixelated;
    }
</style>

{#if modInformations[addonName]?.source !== 'ars_nouveau' && modInformations[addonName]?.icon}
    <img alt={`Added by ${modInformations[addonName].name}`} class="sourceIcon"
         src={modInformations[addonName].icon}
         use:tooltip={{ content: `Added by ${modInformations[addonName].name}`, color: 'text-accent-500', position }}/>
{/if}