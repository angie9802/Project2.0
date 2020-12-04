import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Observable } from 'rxjs';
import {ComApiService} from 'src/app/services/com-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineChartComponent implements OnInit {
  
  sensorData: any = [];
  url = 'http://aulal.org:1880/GetUserData/';
  userID : string = '1';
  temperatura : number[];
  bpm : number[];
  oxigeno  : number[];
  fecha : string[];

  constructor(
    private http: HttpClient,
    private CApi: ComApiService
  ) { }
  
  ngOnInit() {
    this.getDataUser(this.userID);
  }

  getDataUser(IDuser : string){
    var urlData = this.url + '?s=' + IDuser;
    this.http.get(urlData)
    .subscribe(data=>{
      console.log("original:");
      console.log(data);
      this.sensorData = data;

      console.log("extraído:");
      console.log(this.sensorData.Search[0].fecha[4]);
      console.log(Object.keys(this.sensorData.Search));
      console.log("Longitud: " + Object.keys(this.sensorData.Search).length);

      var lengthData = Object.keys(this.sensorData.Search).length;
      var fecha = new Array(lengthData);
      var temperatura = new Array(lengthData);
      var bpm = new Array(lengthData);
      var oxigeno = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        //var ikey:string = i.toString();
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        temperatura[i]=this.sensorData.Search[i].temperatura;
        bpm[i]=this.sensorData.Search[i].bpm;
        oxigeno[i]=this.sensorData.Search[i].sO2;
      }
      this.fecha = fecha;
      this.temperatura = temperatura;
      this.bpm = bpm;
      this.oxigeno = oxigeno;

      this.lineChartData[0].data = this.temperatura;
      this.lineChartData[1].data = this.bpm;
      this.lineChartData[2].data = this.oxigeno;
      this.lineChartLabels = this.fecha;
    });


    console.log("extraído:");
    console.log("fecha:"+this.fecha);
    console.log("temperatura:"+this.temperatura);
    console.log("bpm:"+this.bpm);
    console.log("oxigeno:"+this.oxigeno);
  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperatura' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'BPM' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Oxígeno', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

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

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }
}