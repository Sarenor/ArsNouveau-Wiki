export const modInformations: { [x: string]: App.ModInformation } = {
	ars_nouveau: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items') ||
				// Images in Patchouli Book
				filename.includes('src/main/resources/assets/ars_nouveau/textures/gui/entries')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_nouveau/recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_nouveau/lang');
		},
		repositoryId: 'baileyholl/Ars-Nouveau',
		name: 'Ars Nouveau'
	},
	ars_elemental: {
		texturePredicate: (filename: string) => {
			return (
				(filename.includes('src/main/resources/assets/ars_arsenal/textures/item/') ||
					filename.includes('src/main/resources/assets/ars_nouveau/textures/items/') ||
					filename.includes('src/main/resources/assets/ars_elemental/textures/item/')) &&
				!(filename.includes('watery_grave.png') || filename.includes('conjure_terrain.png'))
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/generated/resources/data/ars_elemental/patchouli_books/elemental_notes/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/generated/resources/data/ars_elemental/patchouli_books/elemental_notes/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/ars_elemental/recipes/') ||
				filename.includes('src/main/resources/data/ars_elemental/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_elemental/lang/');
		},
		repositoryId: 'Alexthw46/Ars-Elemental',
		name: 'Ars Elemental',
		icon: '/ars_elemental_logo.png'
	},
	ars_gears: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_gears/textures');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_gears/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_gears/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_gears/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_gears/lang');
		},
		repositoryId: 'Cycro54/Ars_GEARs',
		name: 'Ars G.E.A.R.S',
		icon: '/arcane_combat_gear.png'
	},
	ars_instrumentum: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_instrumentum/textures/items/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_instrumentum/patchouli_books/wizards_scratchpad/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_instrumentum/patchouli_books/wizards_scratchpad/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/data/ars_instrumentum/recipes/') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes/apparatus') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes/imbuement')
			);
		},
		languagePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_instrumentum/lang') ||
				filename.includes('src/generated/resources/assets/ars_instrumentum/lang')
			);
		},
		repositoryId: 'Sarenor/Ars-Instrumentum',
		repositoryBranch: 'documentation',
		name: 'Ars Instrumentum',
		icon: '/wizards_armarium.png'
	},
	ars_mage_fight: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_mage_fight/textures') ||
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_mage_fight/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_mage_fight/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_mage_fight/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_mage_fight/lang');
		},
		repositoryId: 'Cycro54/Ars_Mage_Fight',
		name: 'Ars Mage Fight',
		icon: '/black_hole.png'
	},
	arsomega: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/arsomega/textures/items/') ||
				// Images in Patchouli Book
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/arsomega/patchouli_books/tornnotes/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/arsomega/patchouli_books/tornnotes/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/data/ars_nouveau/recipes/') ||
				filename.includes('src/main/resources/data/arsomega/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/arsomega/lang');
		},
		repositoryId: 'dkmk100/ArsOmega',
		repositoryBranch: '1.18.2-main',
		name: 'Ars Omega',
		icon: '/demonic_crystal.png'
	},
	ars_scalaes: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_scalaes/textures/item/') &&
				!(
					filename.includes('expand.png') ||
					filename.includes('resize.png') ||
					filename.includes('shrink.png') ||
					filename.includes('morph.png')
				)
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_scalaes/patchouli_books/scalaes/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_scalaes/patchouli_books/scalaes/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/ars_scalaes/recipes') ||
				filename.includes('src/main/resources/data/ars_scalaes/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_scalaes/lang');
		},
		repositoryId: 'Alexthw46/Ars-Scalaes',
		name: 'Ars Scalaes',
		icon: '/scalaes.png'
	},
	too_many_glyphs: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/toomanyglyphs/textures/items/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_nouveau/recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_nouveau/lang');
		},
		repositoryId: 'DerringersMods/TooManyGlyphs',
		name: 'Too Many Glyphs',
		icon: '/chaining.png'
	}
};

export const addonList = [
	'ars_elemental',
	'ars_gears',
	'ars_instrumentum',
	'ars_mage_fight',
	'arsomega',
	'ars_scalaes',
	'too_many_glyphs'
];

export const modlist = ['ars_nouveau'].concat(addonList);
