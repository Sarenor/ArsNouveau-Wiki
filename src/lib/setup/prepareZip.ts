import JSZip from 'jszip';

export const prepareZip = (response: Response) => {
	if (response.status === 200 || response.status === 0) {
		return response
			.blob()
			.then((blob) => blob.arrayBuffer())
			.then((blob) => {
				return JSZip.loadAsync(blob);
			})
			.then((zipfile) => zipfile.filter((relativePath, file) => !file.dir));
	} else {
		console.log(response.statusText);
		return Promise.reject(new Error(response.statusText));
	}
};
