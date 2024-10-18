import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  // Método para obtener el rol del usuario
  getUserRole(): string | null {
    return this.cookieService.get('userRole');
  }

  // Método para almacenar el rol en una cookie
  setUserRole(role: string) {
    this.cookieService.set('userRole', role);
  }

  // Método para cerrar sesión y eliminar la cookie
  logout() {
    this.cookieService.delete('userRole');
  }
}
