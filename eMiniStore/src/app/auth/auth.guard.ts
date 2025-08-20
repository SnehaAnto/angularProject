import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async(route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = await firstValueFrom(auth.isLoggedIn$)
  if(!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
