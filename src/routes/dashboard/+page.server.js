import { protectedPage } from "$lib/api";

export async function load({cookies}){
    await protectedPage(cookies);

}
