import type { JSZipObject } from 'jszip';
import { getFileName } from '$lib/utils/fileName';

export const getTextureFiles = (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>
) => {
	return Promise.all(
		zippedFiles
			.filter((zippedFile) => matcher(zippedFile.name))
			.map((file) =>
				file.async('base64').then((value) => {
					return { [getFileName(file.name)]: value };
				})
			)
	).then((resultingArray) => {
		return resultingArray.reduce((previousValue, currentValue) => {
			return { ...previousValue, ...currentValue };
		}, {});
	});
};

export const getMatchingJSONFiles = (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>
) => {
	return Promise.all(
		zippedFiles
			.filter((zippedFile) => matcher(zippedFile.name))
			.map((file) =>
				file.async('string').then((value) => {
					return { [getFileName(file.name)]: JSON.parse(value) };
				})
			)
	).then((resultingArray) => {
		return resultingArray.reduce((previousValue, currentValue) => {
			return { ...previousValue, ...currentValue };
		}, {});
	});
};
