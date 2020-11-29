import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion-api',
  templateUrl: './comunicacion-api.page.html',
  styleUrls: ['./comunicacion-api.page.scss'],
})
export class ComunicacionApiPage implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit() {
  }

  friends: any =[];

  runHttp(){
    //
    //this.http.get('http://demo6930987.mockable.io/')
    this.http.get('http://aulal.org:1880/RegisterUserHH?nombre=juan&password=2506')
    .subscribe(data=>{
      console.log(data);
      this.friends = data;
    });
  }
}
