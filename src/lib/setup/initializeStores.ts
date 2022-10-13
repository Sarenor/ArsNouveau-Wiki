import JSZip from 'jszip';
import {preparePatchouli} from '$lib/setup/preparePatchouli';
import {patchouliStore, recipesStore, storesLoaded, texturesStore} from '$lib/stores/fileStore';
import {languagesStore, minecraftLanguageStore} from '$lib/stores/languageStore';
import {getMatchingJSONFiles, getTextureFiles} from '$lib/setup/loadFiles';
import {browser} from '$app/environment';
import {apiBaseURL} from '$lib/utils/apiUtils';
import {initializeSearch} from '$lib/setup/initializeSearch';
import {modInformations} from '$lib/utils/modInformations';
import {prepareZip} from '$lib/setup/prepareZip';

const initalizeMinecraftLanguageStore = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return fetch('/minecraft/lang/en_us.json')
		.then((response) => response.json())
		.then((languageFile) => minecraftLanguageStore.set(languageFile));
};

const initalizeDynamicallyLoadedStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	const url = browser ? apiBaseURL() : '/api/zipball';
	return fetch(url)
		.then(prepareZip)
		.then(async function (zip) {
			return Promise.all([
				getTextureFiles(modInformations.ars_nouveau.texturePredicate, zip),
				getMatchingJSONFiles(modInformations.ars_nouveau.patchouliCategoryPredicate, zip),
				getMatchingJSONFiles(modInformations.ars_nouveau.patchouliEntryPredicate, zip),
				getMatchingJSONFiles(modInformations.ars_nouveau.languagePredicate, zip),
				getMatchingJSONFiles(modInformations.ars_nouveau.recipePredicate, zip)
			]).then(
				([
					 loadedTextures,
					 loadedPatchouliCategories,
					 loadedPatchouliEntries,
					 loadedLanguages,
					 loadedRecipes
				 ]) => {
					texturesStore.set(loadedTextures);
					patchouliStore.set(
						preparePatchouli(loadedPatchouliCategories, loadedPatchouliEntries, 'ars_nouveau')
					);
					languagesStore.set(loadedLanguages);
					recipesStore.set(loadedRecipes);
					storesLoaded.set(true);
					setTimeout(() => {
						storesLoaded.set(false);
					}, 86400000 /* stores should be refreshed after 1 day if the server is on for so long */);
					if (browser) {
						initializeSearch(loadedPatchouliCategories, loadedPatchouliEntries);
					}
				}
			);
		});
};

export const initializeStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return Promise.all([
		initalizeMinecraftLanguageStore(fetch),
		initalizeDynamicallyLoadedStores(fetch)
	]);
};
