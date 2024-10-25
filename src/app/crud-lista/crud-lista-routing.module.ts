import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudListaPage } from './crud-lista.page';

const routes: Routes = [
  {
    path: '',
    component: CrudListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudListaPageRoutingModule {}
