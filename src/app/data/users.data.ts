export interface UserCredentials {
  username: string;
  password: string;
}

export const USERS_DATA: Map<string, string> = new Map();

// Helper functions para simular el comportamiento de la API
export function registerUser(username: string, password: string): boolean {
  if (USERS_DATA.has(username)) {
    return false; // User already exists
  }
  USERS_DATA.set(username, password);
  return true;
}

export function validateUser(username: string, password: string): boolean {
  const storedPassword = USERS_DATA.get(username);
  return storedPassword !== undefined && storedPassword === password;
}
