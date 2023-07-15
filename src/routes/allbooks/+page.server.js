import { protectedPage } from "$lib/api";
import { apiFetch } from "$lib/api";

export async function load({cookies}){
    await protectedPage(cookies);
    let books = await apiFetch('/books/all');
    let keys = Object.keys(books.data[0]);
    return {books:books.data, keys:keys};
}

