import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';

export const logged = localStorageStore('logged',false);