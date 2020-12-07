import {ComApiService} from 'src/app/services/com-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-fisio',
  templateUrl: './data-fisio.page.html',
  styleUrls: ['./data-fisio.page.scss'],
})
export class DataFisioPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  constructor(
    private router: Router,
    private CApi: ComApiService
    ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchFisio(this.searchTerm);
    console.log(this.results);
  }
}
