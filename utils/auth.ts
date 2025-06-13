import { jwtDecode } from 'jwt-decode';

export function getToken() {
  const value = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];

  return value || null;
}

export function isTokenValid(token: string): boolean {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch (e) {
    return false;
  }
}