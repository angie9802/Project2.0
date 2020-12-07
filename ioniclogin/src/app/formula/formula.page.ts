import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ComApiService} from 'src/app/services/com-api.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.page.html',
  styleUrls: ['./formula.page.scss'],
})
export class FormulaPage implements OnInit {

  results: Observable<any>;
  userID: string = '4';
  machineID: string ="";
  
  constructor(
    private router: Router,
    private CApi: ComApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
    this.searchChanged();
  }

  back(){
    this.router.navigate(['/home/'+this.machineID]);
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchFormulas(this.userID);
  }
}
