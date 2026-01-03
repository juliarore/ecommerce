import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStore } from '../services/user-store/user-store';

export const authGuard: CanActivateFn = (_, state) => {
  const userStore = inject(UserStore);
  const router = inject(Router);

  if (userStore.isUserAuthenticated()) {
    return true;
  }

  // Redirigim a la pàgina de login si no està autenticat, guardant la URL com a paràmetre
  router.navigate(['/login'], { queryParams: { redirectUrl: state.url } });
  return false;
};
