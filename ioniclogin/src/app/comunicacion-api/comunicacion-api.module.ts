import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionApiPageRoutingModule } from './comunicacion-api-routing.module';

import { ComunicacionApiPage } from './comunicacion-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionApiPageRoutingModule
  ],
  declarations: [ComunicacionApiPage]
})
export class ComunicacionApiPageModule {}
