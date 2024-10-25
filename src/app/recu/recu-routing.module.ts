import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuPage } from './recu.page';

const routes: Routes = [
  {
    path: '',
    component: RecuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuPageRoutingModule {}
