import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListaPageRoutingModule } from './crud-lista-routing.module';

import { CrudListaPage } from './crud-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListaPageRoutingModule
  ],
  declarations: [CrudListaPage]
})
export class CrudListaPageModule {}
