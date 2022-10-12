import type { Readable, Writable } from 'svelte/store';
import { derived, writable } from 'svelte/store';

export const languagesStore: Writable<App.LanguageDictionary | undefined> = writable({});
export const chosenLanguageStore: Writable<string> = writable('en_us');
export const minecraftLanguageStore: Writable<App.MinecraftLanguageDictionary> = writable({});

export const updateMinecraftLanguageStore = (languageCode: string) => {
	return fetch(`/minecraft/lang/${languageCode}.json`)
		.then((response) => response.json())
		.then((languageFile) => minecraftLanguageStore.set(languageFile));
};

export const labelStore: Readable<(label: string) => string> = derived(
	[languagesStore, chosenLanguageStore, minecraftLanguageStore],
	([$languages, $chosenLanguage, $minecraftLanguage]) => {
		if ($languages) {
			return (label: string) => {
				debugger;
				return $languages[$chosenLanguage][label] || $minecraftLanguage[label] || label;
			};
		} else {
			return (any: string) => 'labelstore not intialized';
		}
	},
	(any: string) => 'labelstore not intialized'
);
