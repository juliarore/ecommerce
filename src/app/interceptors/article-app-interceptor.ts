import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserStore } from '../services/user-store/user-store';

export const articleAppInterceptor: HttpInterceptorFn = (req, next) => {
  const userStore = inject(UserStore);
  const token = userStore.getToken();

  // Si l'usuari està autenticat, afegim el token a les capçaleres de la petició
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedRequest);
  }

  // Si no hi ha token, retornem la petició original
  return next(req);
};
