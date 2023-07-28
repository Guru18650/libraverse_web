<script>
    export let text, href;
</script>
{#if href == "sb"}
<button type="submit" class="w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
{:else}
<a href={href}><button type="submit" class="w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button></a>
{/if}
