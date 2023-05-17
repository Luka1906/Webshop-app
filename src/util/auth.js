export function genAuthToken () {
    const token = localStorage.getItem('token');
    return token;
}