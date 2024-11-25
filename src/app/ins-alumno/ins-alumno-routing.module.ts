import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsAlumnoPage } from './ins-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: InsAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsAlumnoPageRoutingModule {}
