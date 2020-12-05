import {ComApiService} from 'src/app/services/com-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comunicacion-api',
  templateUrl: './comunicacion-api.page.html',
  styleUrls: ['./comunicacion-api.page.scss'],
})
export class ComunicacionApiPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private http: HttpClient, private CApi: ComApiService){}

  ngOnInit() {}

  friends: any =[]; 
  dataUser: any = [];
  url = 'http://aulal.org:1880/GetUserData/';

  runHttp(){
    //
    //this.http.get('http://demo6930987.mockable.io/')
    this.http.get('http://aulal.org:1880/RegisterUserHH?nombre=juan&password=2506')
    .subscribe(data=>{
      console.log(data);
      this.friends = data;
    });
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchData(this.searchTerm);
  }

}
