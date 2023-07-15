import axios from 'axios';
import { redirect } from '@sveltejs/kit';

export async function apiFetch(endpoint, payload) {
        var resp = await axios.post('http://localhost:3001'+endpoint, payload, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}, validateStatus: function (status) {return status < 500;}});
            return {data:resp.data, status:resp.status};
        }
    

export async function verify(cookies) {
	const jwt = cookies.get('jwt');
    if(jwt === undefined){
        return false;
    } else {
        const payload = {token:jwt}
        var resp = await apiFetch('/auth/verify',payload);
        if(resp.data.authenticated == 'false'){
            return false;
        } else {
            return true;
        }
    }
}

export async function protectedPage(cookies){
    if(!await verify(cookies)){
        throw redirect(307, '/login');
    }
}