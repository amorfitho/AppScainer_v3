import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkainerPageRoutingModule } from './skainer-routing.module';

import { SkainerPage } from './skainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkainerPageRoutingModule
  ],
  declarations: [SkainerPage]
})
export class SkainerPageModule {}
