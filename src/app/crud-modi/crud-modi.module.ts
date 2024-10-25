import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModiPageRoutingModule } from './crud-modi-routing.module';

import { CrudModiPage } from './crud-modi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModiPageRoutingModule
  ],
  declarations: [CrudModiPage]
})
export class CrudModiPageModule {}
