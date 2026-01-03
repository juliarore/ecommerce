import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private token: string | null = null;
  private isAuthenticated = signal(false);

  constructor() {
    // Carreguem el token des de localStorage
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      this.token = savedToken;
      this.isAuthenticated.set(true);
    }
  }

  // Guardar el token i marcar l'usuari com a autenticat
  saveToken(token: string): void {
    this.token = token;
    this.isAuthenticated.set(true);
    localStorage.setItem('authToken', token);
  }

  // Getter per obtenir el token
  getToken(): string | null {
    return this.token;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated();
  }

  logout(): void {
    this.token = null;
    this.isAuthenticated.set(false);
    localStorage.removeItem('authToken');
  }
}
