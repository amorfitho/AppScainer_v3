import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudListaAlumPage } from './crud-lista-alum.page';

const routes: Routes = [
  {
    path: '',
    component: CrudListaAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudListaAlumPageRoutingModule {}
