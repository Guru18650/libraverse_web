<script>
    export let data;
</script>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:pt-48">
    <div class="rounded-lg w-1/2 shadow border md:mt-0 p-4 text-center bg-gray-800 border-gray-700 ">
       <p class="text-4xl">{data.title}</p>
       <div class="grid grid-cols-2 grid-flow-row gap-4 text-xl">
        <div>Author: {data.author}</div>
        <div>Publisher: {data.publisher}</div>
        <div>Length: {data.length}</div>
        <div>ISBN13: {data.isbn_13}</div>
       </div>
    </div>
</div>  
