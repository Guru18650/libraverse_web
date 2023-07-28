import { protectedPage } from "$lib/api";
import { apiFetch } from "$lib/api";
import { redirect } from '@sveltejs/kit';

export async function load({cookies, params}){
    await protectedPage(cookies);
    let payload = {isbn:params.slug};
    let author = await apiFetch('/author/id', payload); 
    if(author.status != 200)
        throw redirect(301, '/dashboard');
    return {author:author}

}

