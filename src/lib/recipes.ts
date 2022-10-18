import { getIdFromResourceLocation } from '$lib/utils/idResolver';

const fixMyOwnOrganization = (name: string): string => {
	return name.split('/').pop() || name;
};

export const getRecipe = (resourceLocation: string, recipes: App.RecipeDictionary): App.Recipe => {
	if (recipes && resourceLocation) {
		return recipes[fixMyOwnOrganization(getIdFromResourceLocation(resourceLocation))] || {};
	}
	return { type: 'Unknown Recipe' };
};
