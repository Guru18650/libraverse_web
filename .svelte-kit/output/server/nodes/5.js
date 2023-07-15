import * as server from '../entries/pages/register/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/5.6ae4168a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/formSubmit.a0a5ea98.js"];
export const stylesheets = [];
export const fonts = [];
