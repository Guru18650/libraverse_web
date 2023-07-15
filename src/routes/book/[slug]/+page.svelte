<script>
    export let data;
    import BookCard from '$lib/bookCard.svelte';
</script>

<BookCard data={data.books.data[0]}/>