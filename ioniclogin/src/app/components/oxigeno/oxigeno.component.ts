import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { HttpClient } from '@angular/common/http';
import { MachineIDService } from 'src/app/machine-id.service';

@Component({
  selector: 'app-oxigeno',
  templateUrl: './oxigeno.component.html',
  styleUrls: ['./oxigeno.component.scss'],
})

export class OxigenoComponent implements OnInit {
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
      var oxigeno = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        oxigeno[i]=this.sensorData.Search[i].sO2;
      }

      this.lineChartData[0].data = oxigeno;
      this.lineChartLabels = fecha;
      document.getElementById('cont6').innerHTML=fecha[lengthData-1];
      document.getElementById('cont5').innerHTML=oxigeno[lengthData-1]+" %";
    });
  }

  public lineChartData: ChartDataSets[] = [
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Oxígeno'}
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
      backgroundColor: 'rgba(47,68,228,0.3)',
      borderColor: 'rgba(47,68,228,1)',
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
}
