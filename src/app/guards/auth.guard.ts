import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)


  const token = authService.getToken();
  if (token) {
    authService.isAuthSignal.set(true)
    return true;
  } else {
    authService.logout()
    router.navigate(['/login']); // Redirigir si no esta autenticado
    return false;
  }

};
