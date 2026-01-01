import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private token: string | null = null;
  private isAuthenticated = false;

  // Guardar el token i marcar l'usuari com a autenticat
  saveToken(token: string): void {
    this.token = token;
    this.isAuthenticated = true;
  }

  // Getter per obtenir el token
  getToken(): string | null {
    return this.token;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.token = null;
    this.isAuthenticated = false;
  }
}
