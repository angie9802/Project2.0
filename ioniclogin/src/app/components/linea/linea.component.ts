import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { HttpClient } from '@angular/common/http';
import { MachineIDService } from 'src/app/machine-id.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input('machineID') machineID : string;
  sensorData: any = [];
  url = 'http://aulal.org:1880/GetUserData/';

  constructor(
    private http: HttpClient,
    public machineIDserv: MachineIDService
  ) { }
  
  ngOnInit() {
    this.getDataUser(this.machineID);
  }

  getDataUser(machineID : string){

    var urlData = this.url + '?s=' + machineID;
    console.log("temp: " + urlData);
    this.http.get(urlData)
    .subscribe(data=>{
      
      this.sensorData = data;
      var lengthData = Object.keys(this.sensorData.Search).length;
      var fecha = new Array(lengthData);
      var temperatura = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        temperatura[i]=this.sensorData.Search[i].temperatura;
      }

      this.lineChartData[0].data = temperatura;
      this.lineChartLabels = fecha;
      document.getElementById('cont1').innerHTML=fecha[lengthData-1];
      document.getElementById('cont2').innerHTML=temperatura[lengthData-1]+" °C";
    });
  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperatura' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines: {
            color: 'rgba(2,3,1,0.4)',
          },
          ticks: {
            fontColor: 'black',
            fontSize: 15
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(2,3,1,0.3)',
          },
          ticks: {
            fontColor: 'black',
            fontSize: 15
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
    {
      backgroundColor: 'rgba(237,33,33,0.3)',
      borderColor: 'rgba(237,33,33,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
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