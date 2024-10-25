import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniPageRoutingModule } from './ini-routing.module';

import { IniPage } from './ini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniPageRoutingModule
  ],
  declarations: [IniPage]
})
export class IniPageModule {}
