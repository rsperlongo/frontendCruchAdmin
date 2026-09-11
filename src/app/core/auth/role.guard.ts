import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const roles = authService.getUser()?.roles ?? [];

  return roles.some((role) => role.toLowerCase() === 'admin') ? true : router.createUrlTree(['/dashboard']);
};
