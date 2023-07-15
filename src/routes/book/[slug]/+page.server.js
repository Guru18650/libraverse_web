import { protectedPage } from "$lib/api";
import { apiFetch } from "$lib/api";
import { redirect } from '@sveltejs/kit';

export async function load({cookies, params}){
    await protectedPage(cookies);
    let payload = {isbn:params.slug};
    let books = await apiFetch('/books/isbn', payload); 
    if(books.status != 200)
        throw redirect(301, '/dashboard');
    return {books:books}

}

