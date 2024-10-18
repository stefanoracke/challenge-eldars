import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)


  const role = authService.getUserRole();
  if (role === 'admin') {
    return true;
  } else {
    router.navigate(['/unauthorized']); // Redirigir si no es admin
    return false;
  }
};
