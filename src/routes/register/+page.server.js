import { apiFetch } from '$lib/api.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
        cookies.set("newAcc","true");
        throw redirect(307, '/login');
	}
};