import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { NavController } from '@ionic/angular';

export const ingresadoGuard: CanActivateFn = (route, state) => {

  const navControl = inject(NavController);


  if (localStorage.getItem('Ingresado')) {
    return true;
  } else {
    navControl.navigateRoot('/home');
    return false;
  }
};
