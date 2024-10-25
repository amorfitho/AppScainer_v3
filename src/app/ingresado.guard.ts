import { CanActivateFn } from '@angular/router';

export const ingresadoGuard: CanActivateFn = (route, state) => {
  return true;
};
