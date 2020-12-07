import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Observable } from 'rxjs';
import {ComApiService} from 'src/app/services/com-api.service';
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { MachineIDService } from 'src/app/machine-id.service';

@Component({
  selector: 'app-fisline-chart',
  templateUrl: './fisline.component.html',
  styleUrls: ['./fisline.component.scss'],
})
export class FislineChartComponent implements OnInit {
  @Input('machineID') machineID : string;
  sensorData: any = [];
  url = 'http://aulal.org:1880/GetUserFisio/';
  userID : string = '1';
  chartE : string ;
  results: Observable<any>;
  gi_x : number[];
  gi_y : number[];
  gi_z : number[];
  th_x : number[];
  th_y : number[];
  th_z : number[];
  modAC : number[];
  fecha : string[];
  CHARTT ;

  constructor(
    private http: HttpClient,
    private CApi: ComApiService,
    public machineIDserv: MachineIDService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
    this.getDataUser(this.machineID);
  }


  getDataUser(ID : string){
    var urlData = this.url + '?s=' + ID;
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
      var gi_x = new Array(lengthData);
      var gi_y = new Array(lengthData);
      var gi_z = new Array(lengthData);
      var th_x = new Array(lengthData);
      var th_y = new Array(lengthData);
      var th_z = new Array(lengthData);
      var modAC = new Array(lengthData);
      var fecha = new Array(lengthData);

      for (let i = 0; i < Object.keys(this.sensorData.Search).length; i++) {
        //var ikey:string = i.toString();
        var ikey= Object.keys(this.sensorData.Search)[i];
        fecha[i]=this.sensorData.Search[i].fecha.slice(0,10);
        gi_x[i]=this.sensorData.Search[i].gi_x;
        gi_y[i]=this.sensorData.Search[i].gi_y;
        gi_z[i]=this.sensorData.Search[i].gi_z;
        th_x[i]=this.sensorData.Search[i].th_x;
        th_y[i]=this.sensorData.Search[i].th_y;
        th_z[i]=this.sensorData.Search[i].th_z;
        modAC[i]= this.sensorData.Search[i].mag_acel;;
      }
      this.fecha = fecha;
      this.gi_x = gi_x;
      this.gi_y = gi_y;
      this.gi_z = gi_z;
      this.th_x = th_x;
      this.th_y = th_y;
      this.th_z = th_z;
      this.modAC = modAC;

      this.lineChartData[0].data = this.modAC;

      this.GiroXChartData[0].data = this.gi_x;
      this.GiroYChartData[0].data = this.gi_y;
      this.GiroZChartData[0].data = this.gi_z;

      this.THXChartData[0].data = this.th_x;
      this.THYChartData[0].data = this.th_y;
      this.THZChartData[0].data = this.th_z;

      this.lineChartLabels = this.fecha;
      this.AJA = this.lineChartData;
 
      document.getElementById('fFIsio').innerHTML=fecha[lengthData-1];
      document.getElementById('dFisio').innerHTML="M="+modAC[lengthData-1]+","+"Gx="+gi_x[lengthData-1]+"°"+"Gy="+gi_y[lengthData-1]+"°"+"Gz="+gi_z[lengthData-1]+"°";


    });

    console.log("extraído:");
    console.log("gi_x:"+this.gi_x);
    console.log("gi_y:"+this.gi_y);
    console.log("gi_z:"+this.gi_z);

  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Movement Module' }
  ];

  public GiroXChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'GIRO_x' }
  ];
  public GiroYChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'GIRO_y' }
  ];
  public GiroZChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'GIRO_z' }
  ];

  public THXChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'THETA_x' }
  ];
  public THYChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'THETA_y' }
  ];
  public THZChartData: ChartDataSets[] = [
    { data: [6, 5, 8, 9, 5, 5, 4], label: 'THETA_z' }
  ];

  public AJA: ChartDataSets[]=[
  { data: [6, 5, 8, 9, 5, 5, 4], label: 'Chosee Graphics' }];
  


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
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  searchChanged() {
    // Call our service function which returns an Observable
    //this.results = this.th_x;
    console.log(this.results);
  }

  public optionsFn(): void { //here item is an object 
    console.log(this.CHARTT);
 let item = this.CHARTT; // Just did this in order to avoid changing the next lines of code :P
    this.AJA=item;
  }

}
