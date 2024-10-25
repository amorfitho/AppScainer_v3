import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniPage } from './ini.page';

const routes: Routes = [
  {
    path: '',
    component: IniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniPageRoutingModule {}
