import { verify } from "$lib/api";

export async function load({cookies}){
    let logged = await verify(cookies);
    return {logged}
}



