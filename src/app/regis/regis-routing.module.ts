import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisPage } from './regis.page';

const routes: Routes = [
  {
    path: '',
    component: RegisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisPageRoutingModule {}
