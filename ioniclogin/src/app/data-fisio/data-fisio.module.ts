import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataFisioPageRoutingModule } from './data-fisio-routing.module';

import { DataFisioPage } from './data-fisio.page';
import { FislineChartComponent } from '../components/fisline/fisline.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataFisioPageRoutingModule,
    ChartsModule
  ],
  declarations: [
    DataFisioPage,
    FislineChartComponent
  ],
  bootstrap: [FislineChartComponent]
})
export class DataFisioPageModule {

}
