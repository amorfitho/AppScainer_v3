import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { NavController } from '@ionic/angular';

export const noingresadoGuard: CanActivateFn = (route, state) => {

  const navControl = inject(NavController);

  
  if (localStorage.getItem('Ingresado')) {
    navControl.navigateRoot('/ini');
    return false;
  } else {
    return true;
  }


};