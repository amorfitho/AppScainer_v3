import { CanActivateFn } from '@angular/router';

export const noingresadoGuard: CanActivateFn = (route, state) => {
  return true;
};
