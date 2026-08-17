const STORAGE_KEY = 'wedding-guest-token';

function generateToken() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Anonymt, per-webbläsare ID — låter en gäst känna igen sin egen
// reservation utan inloggning. Skapas en gång och sparas i localStorage.
export function getGuestToken() {
  try {
    let token = localStorage.getItem(STORAGE_KEY);
    if (!token) {
      token = generateToken();
      localStorage.setItem(STORAGE_KEY, token);
    }
    return token;
  } catch {
    return generateToken();
  }
}
