<script>
    export let text, href, color = "primary";
</script>
{#if href == "sb"}
<button type="submit" class="w-full  bg-{color}-600 hover:bg-{color}-700 focus:ring-4 focus:outline-none focus:ring-{color}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
{:else}
<a href={href}><button type="submit" class="w-full  bg-{color}-600 hover:bg-{color}-700 focus:ring-4 focus:outline-none focus:ring-{color}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button></a>
{/if}
