export function parseCookie(str) {
    const result = {};
    if (str != null) {
        for (const cookie of str.split(';')) {
            const [name, value] = cookie.trim().split('=');
            result[name] = value;
        }
    }

    return result;
}