import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated() ? true : inject(Router).createUrlTree(['/login']);
};
