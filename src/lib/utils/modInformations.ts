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
		repositoryId: 'baileyholl/Ars-Nouveau'
	},
	ars_elemental: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_arsenal/textures/item/') ||
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/') ||
				filename.includes('src/main/resources/assets/ars_elemental/textures/item/')
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
		repositoryId: 'Alexthw46/Ars-Elemental'
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
			return filename.includes('src/main/resources/data/ars_instrumentum/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_instrumentum/lang');
		},
		repositoryId: 'Sarenor/Ars-Instrumentum'
	},
	ars_omega: {
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
			return filename.includes('src/main/resources/assets/ars_omega/lang');
		},
		repositoryId: 'dkmk100/ArsOmega',
		repositoryBranch: '1.18.2-main'
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
		repositoryId: 'DerringersMods/TooManyGlyphs'
	}
};

export const modlist = [
	'ars_nouveau',
	'ars_elemental',
	'ars_instrumentum',
	'ars_omega',
	'too_many_glpyhs'
];
