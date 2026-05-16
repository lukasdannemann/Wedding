import { createContext, useContext, useState } from 'react';

// Ändra koden här när du vill byta. Det är klientsida — alltså ingen
// riktig säkerhet, bara en mjuk grind så obehöriga inte snubblar in.
const ACCESS_CODE = '1910';
const STORAGE_KEY = 'wedding-access';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  function login(code) {
    if (code === ACCESS_CODE) {
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        /* localStorage kan vara avstängd — vi fortsätter ändå för sessionen */
      }
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function logout() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
