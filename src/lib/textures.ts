const mapSpecialTextures = (texture: string) => {
	if (texture === 'ars_nouveau:dowsing_rod') {
		return 'ars_nouveau:dowsing_rod_100';
	}
	if (texture.startsWith('ars_nouveau:potion_flask')) {
		return 'ars_nouveau:potion_flask';
	}
	if (texture === 'ars_nouveau:magebloom_crop') {
		return 'ars_nouveau:magebloom_seed';
	}
	if (texture === 'ars_nouveau:mana_gem') {
		return 'ars_nouveau:source_gem';
	}
	if (texture === 'ars_nouveau:mana_gem_block') {
		return 'ars_nouveau:source_gem_block';
	}
	if (texture === 'ars_gears:combat/combat_rune_1') {
		return 'ars_gears:combat_rune_1';
	}
	if (texture === 'ars_gears:combat/combat_rune_2') {
		return 'ars_gears:combat_rune_2';
	}
	if (texture === 'ars_gears:combat/combat_rune_3') {
		return 'ars_gears:combat_rune_3';
	}
	if (texture === 'ars_gears:combat/combat_rune_4') {
		return 'ars_gears:combat_rune_4';
	}
	if (texture === 'ars_gears:combat/wood_combat_gear') {
		return 'ars_gears:wood_combat_gear';
	}
	if (texture === 'ars_elemental:ritual_squirrels') {
		return 'ars_elemental:squirrels';
	}
	if (texture === 'ars_elemental:ritual_detection') {
		return 'ars_elemental:detection';
	}
	return texture;
};

export const getTexture = (resourceLocation: string, textures: App.TextureDictionary): string => {
	if (textures) {
		const texture = textures[mapSpecialTextures(resourceLocation)] || 'Unknown Texture';
		if (texture === 'Unknown Texture') {
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};
