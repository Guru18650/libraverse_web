import { apiFetch } from '$lib/api.js';
import { redirect } from '@sveltejs/kit';
import { logged } from '$lib/stores';
export function load({cookies}){
    const newAcc = cookies.get("newAcc");
    cookies.set("newAcc","");
    return {newAcc}
}

function setLocals(event) {
    event.locals.logged = true;
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
        const email = data.get('email');
        const password = data.get('pass');
		if(email != "" && password != ""){
            const payload = {email:email, password:password}
            var resp = await apiFetch('/auth/login',payload);
            cookies.set('jwt',resp.data);
            logged.set(true);
            throw redirect(301,'/dashboard');
        }
	}
};

