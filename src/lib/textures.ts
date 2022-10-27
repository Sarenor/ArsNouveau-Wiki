import { getIdFromResourceLocation } from '$lib/utils/idResolver';

const mapSpecialTextures = (texture: string) => {
	if (!texture) {
		return '';
	}

	if (texture.includes('glyph_')) {
		return texture.replace('glyph_', '');
	}
	if (texture === 'ars_nouveau:dowsing_rod') {
		return 'ars_nouveau:dowsing_rod_100';
	}
	if (texture === 'ars_nouveau:spell_parchment') {
		return 'ars_nouveau:scroll_inscribed';
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
	if (texture === 'ars_nouveau:glyph_advanced_amplify') {
		return 'arsomega:advanced_amplify';
	}
	if (texture === 'ars_nouveau:ritual_petrification') {
		return 'arsomega:ritual_petrification';
	}
	if (texture === 'ars_nouveau:ritual_aura') {
		return 'arsomega:ritual_aura';
	}
	if (texture === 'ars_nouveau:ritual_shaping') {
		return 'arsomega:ritual_shaping';
	}
	if (texture === 'ars_nouveau:ritual_advanced_overgrowth') {
		return 'arsomega:ritual_advanced_overgrowth';
	}
	if (texture === 'ars_nouveau:ritual_banishment') {
		return 'arsomega:banishment';
	}
	if (texture === 'ars_nouveau:ritual_perma_flight') {
		return 'arsomega:perma_flight';
	}
	if (texture === 'ars_nouveau:ritual_open_portal') {
		return 'arsomega:ritual_open_portal';
	}
	if (texture === 'ars_nouveau:ritual_flowing_time') {
		return 'arsomega:ritual_flowing_time';
	}
	if (texture === 'ars_nouveau:ritual_fatigue') {
		return 'arsomega:ritual_fatigue';
	}
	if (texture === 'ars_nouveau:ritual_cleansing') {
		return 'arsomega:ritual_cleansing';
	}
	if (texture === 'ars_nouveau:ritual_change_biome') {
		return 'arsomega:ritual_change_biome';
	}
	if (texture === 'ars_nouveau:ritual_demonic_summoning') {
		return 'arsomega:ritual_demonic_summoning';
	}
	if (texture === 'ars_nouveau:ritual_dispel') {
		return 'arsomega:ritual_dispel';
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
	if (texture === 'arsomega:arcane_bloom_crop') {
		return 'arsomega:arcane_bloom';
	}
	if (texture === 'ars_nouveau:wither_summon') {
		return 'arsomega:wither_summon';
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

export const getItemSrc = (item: string, textures: App.TextureDictionary) => {
	let src = getTexture(item, textures);
	const itemId = getIdFromResourceLocation(item);
	if (src === 'Unknown Texture') {
		if (['clock', 'compass'].includes(itemId)) {
			src = `/minecraft/textures/item/${itemId}_12.png`;
		} else {
			src = `/minecraft/textures/item/${itemId}.png`;
		}
	}
	return src;
};
