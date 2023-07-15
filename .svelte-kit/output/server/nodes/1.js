

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.520b366c.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/singletons.d94b97eb.js"];
export const stylesheets = [];
export const fonts = [];
