import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataPageRoutingModule } from './data-routing.module';
import { DataPage } from './data.page';
import { LineChartComponent } from '../components/linea/linea.component';
import { ChartsModule } from 'ng2-charts';
import { BpmComponent } from '../components/bpm/bpm.component';
import { OxigenoComponent } from '../components/oxigeno/oxigeno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule,
    ChartsModule
  ],
  declarations: [
    DataPage,
    LineChartComponent,
    BpmComponent,
    OxigenoComponent
  ]
})
export class DataPageModule {}
