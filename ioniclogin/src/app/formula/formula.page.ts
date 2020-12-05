import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ComApiService} from 'src/app/services/com-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.page.html',
  styleUrls: ['./formula.page.scss'],
})
export class FormulaPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  userID: string = '1';
  
  constructor(
    private router: Router,
    private CApi: ComApiService
    ) { }

  ngOnInit() {
    this.searchChanged();
  }

  back(){
    this.router.navigate(['/home']);
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchFormulas(this.userID);
  }
}
