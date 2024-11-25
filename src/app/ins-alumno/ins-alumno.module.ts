import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsAlumnoPageRoutingModule } from './ins-alumno-routing.module';

import { InsAlumnoPage } from './ins-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsAlumnoPageRoutingModule
  ],
  declarations: [InsAlumnoPage]
})
export class InsAlumnoPageModule {}
