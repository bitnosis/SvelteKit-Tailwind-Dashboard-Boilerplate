import { parseCookie } from '$lib/utils/parseCookie';

export function getSeesion({ headers }) {
	const user = parseCookie(headers.cookie).user;
	return {
		user
	};
}
