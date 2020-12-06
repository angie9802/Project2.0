import {ComApiService} from 'src/app/services/com-api.service';
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

  constructor(
     private CApi: ComApiService
  ){}

  ngOnInit() {}

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchData(this.searchTerm);
    console.log(this.results);
  }

}
