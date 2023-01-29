import { dev } from '$app/environment';

export const getAddonURL = (repositoryId: string, ref?: string) => {
	if (dev) {
		return (
			`http://localhost:30080/https://api.github.com/repos/${repositoryId}/zipball` +
			(ref ? `/${ref}` : '')
		);
	} else {
		return (
			`https://cors-anywhere-sshmngscpq-uc.a.run.app/https://api.github.com/repos/${repositoryId}/zipball` +
			(ref ? `/${ref}` : '')
		);
	}
};
