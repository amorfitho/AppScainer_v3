import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListaAlumPageRoutingModule } from './crud-lista-alum-routing.module';

import { CrudListaAlumPage } from './crud-lista-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListaAlumPageRoutingModule
  ],
  declarations: [CrudListaAlumPage]
})
export class CrudListaAlumPageModule {}
