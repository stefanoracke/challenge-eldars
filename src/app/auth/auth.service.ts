import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) { }

  // This signal represents the authentication status
  isAuthSignal = signal<boolean>(false);

  // Método para obtener el rol del usuario
  getToken(): string | null {
    return this.cookieService.get('userEldarToken');
  }

  // Método para almacenar el rol en una cookie
  setToken(token: string) {
    this.cookieService.set('userEldarToken', token, 3600);
  }
  // Método para obtener el rol del usuario
  getUserRole(): string | null {
    return this.cookieService.get('userRole');
  }

  // Método para almacenar el rol en una cookie
  setUserRole(role: string) {
    this.cookieService.set('userRole', role);
  }

  isAdmin() {
    const role = this.getUserRole()
    return role === "admin"
  }

  isAuthenticated() {
    const token = this.getToken()
    return token != undefined
  }

  // Método para cerrar sesión y eliminar la cookie
  logout() {
    this.isAuthSignal.set(false);
    this.cookieService.delete('userRole');
    this.cookieService.delete('userEldarToken');
  }
}
