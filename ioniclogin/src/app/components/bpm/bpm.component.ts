import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { HttpClient } from '@angular/common/http';
import { MachineIDService } from 'src/app/machine-id.service';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss'],
})

export class BpmComponent implements OnInit {
  @Input('machineID') machineID : string;
  sensorData: any = [];
  url = 'http://aulal.org:1880/GetUserData/';
  //machineID : string = this.machineIDserv.machineID;

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
      var bpm = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        bpm[i]=this.sensorData.Search[i].bpm;
      }

      this.lineChartData[0].data = bpm;
      this.lineChartLabels = fecha;
      document.getElementById('cont4').innerHTML=fecha[lengthData-1];
      document.getElementById('cont3').innerHTML=bpm[lengthData-1]+" bpm";
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
      backgroundColor: 'rgba(20,102,20,0.3)',
      borderColor: 'rgba(20,102,20,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
}
