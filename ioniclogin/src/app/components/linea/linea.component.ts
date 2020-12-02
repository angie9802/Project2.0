import { Component } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss'],
})
export class LineaComponent{

  public lineChartData:Array<any> = [
    {data: [64,23,23,65,76,85,12], label:'Series A'},
    {data: [81,32,58,12,85,12,54], label:'Series B'},
    {data: [56,93,75,13,62,75,23], label:'Series C'}
  ]

  public lineChartLabels:Array<any> = [
    'Enero','Febrero','Marzo','abril',
    'mayo','junio','julio','agosto',
    'septiembre','octubre','noviembre',
    'diciembre'
  ]

  public lineChartOptions:any={
    responsive:true
  };

  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(142,45,78,0,2)',
      borderColor: 'rgba(65,23,21,4)',
      pointBackgroundColor: 'rgba(65,23,21,4)',
      pointBorderColor: 'wfff',
      pointHoverBackground: 'wfff',
      pointHoverBorderColor: 'rgba(150,59,32,0,8)',
    },
    {
      backgroundColor: 'rgba(142,45,78,0,2)',
      borderColor: 'rgba(65,23,21,4)',
      pointBackgroundColor: 'rgba(65,23,21,4)',
      pointBorderColor: 'wfff',
      pointHoverBackground: 'wfff',
      pointHoverBorderColor: 'rgba(150,59,32,0,8)',
    },
    {
      backgroundColor: 'rgba(142,45,78,0,2)',
      borderColor: 'rgba(65,23,21,4)',
      pointBackgroundColor: 'rgba(65,23,21,4)',
      pointBorderColor: 'wfff',
      pointHoverBackground: 'wfff',
      pointHoverBorderColor: 'rgba(150,59,32,0,8)',
    }
  ]

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
