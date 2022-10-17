import { getIdFromResourceLocation } from '$lib/utils/idResolver';

export const getRecipe = (resourceLocation: string, recipes: App.RecipeDictionary): App.Recipe => {
	if (recipes && resourceLocation) {
		return recipes[getIdFromResourceLocation(resourceLocation)] || {};
	}
	return { type: 'Unknown Recipe' };
};
