import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuPageRoutingModule } from './recu-routing.module';

import { RecuPage } from './recu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecuPage]
})
export class RecuPageModule {}
