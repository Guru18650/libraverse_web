<script>
    export let data;
    import TableRow from '$lib/tableRow.svelte';


</script>
<div class="text-center margin-auto text-2xl m-5 font-semibold">
    YOUR LIBRARY
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 m-auto">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
        {#each data.keys as key}
        <th scope="col" class="px-6 py-3">{key}</th>
        {/each}
    </tr>
    </thead>
        <tbody>
            

        {#each data.books as book, i}
        <tr name="{book.isbn_13}" on:click={(event) =>
        window.location.href="/book/"+event.target.parentElement.getAttribute('name')} 
        class={i%2==0 ? 'bg-gray-800 hover:bg-blue-800' : 'bg-gray-700 hover:bg-blue-800'} >
        {#each data.keys as key}
            <TableRow text={book[key]}/>
        {/each}
        </tr>
        {/each}
        </tbody>
  </table>
</div>