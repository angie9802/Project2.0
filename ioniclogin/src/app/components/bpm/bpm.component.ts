import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss'],
})

export class BpmComponent implements OnInit {

  sensorData: any = [];
  url = 'http://aulal.org:1880/GetUserData/';
  userID : string = '1';

  constructor(
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    this.getDataUser(this.userID);
  }

  getDataUser(IDuser : string){

    var urlData = this.url + '?s=' + IDuser;
    this.http.get(urlData)
    .subscribe(data=>{

      this.sensorData = data;
      var lengthData = Object.keys(this.sensorData.Search).length;
      var fecha = new Array(lengthData);
      var bpm = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        bpm[i]=this.sensorData.Search[i].bpm;
      }

      this.lineChartData[0].data = bpm;
      this.lineChartLabels = fecha;
    });
  }

  public lineChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'BPM' }
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
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
}
