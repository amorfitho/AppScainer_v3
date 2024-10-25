import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudModiPage } from './crud-modi.page';

const routes: Routes = [
  {
    path: '',
    component: CrudModiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudModiPageRoutingModule {}
