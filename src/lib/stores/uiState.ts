// Persists the mobile-only nav drawer 'open' state
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

export const currentExpandedCategory: Writable<string> = writable('');

export const currentPageSource: Writable<string> = writable('');
