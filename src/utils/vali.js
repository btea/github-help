const urlReg = /https:\/\/github.com\/([^\/]*)\/([^\/])/;
export function validateLink(link) {
	if (!link) {
		return false;
	}
	return urlReg.test(link);
}
