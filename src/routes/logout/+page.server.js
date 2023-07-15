import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';

export async function load({cookies}){
    cookies.set("jwt","");
    throw redirect(301,'/');

}
