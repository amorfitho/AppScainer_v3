import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkainerPage } from './skainer.page';

const routes: Routes = [
  {
    path: '',
    component: SkainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkainerPageRoutingModule {}
