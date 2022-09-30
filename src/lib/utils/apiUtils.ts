import { dev } from '$app/environment';

export const apiBaseURL = () => {
	if (dev) {
		return 'http://localhost:30080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	} else {
		return 'https://cors-anywhere-sshmngscpq-uc.a.run.app:8080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	}
};
