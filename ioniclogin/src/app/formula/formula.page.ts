import { HttpClient } from '@angular/common/http';
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
  userID: number;
  machineID: string ="";
  
  constructor(
    private router: Router,
    private CApi: ComApiService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
    var httpSearch  = 'http://aulal.org:1880/GetUserHH2?machine_ID='+this.machineID;

      this.http.get(httpSearch)
      .subscribe(async data=>{
        this.userID = data[0].id;
        console.log("user id: " + this.userID);
        this.searchChanged();
      });
    
  }

  back(){
    this.router.navigate(['/home/'+this.machineID]);
  }

  searchChanged() {
    this.results = this.CApi.searchFormulas(this.userID);
    console.log(this.results)
  }
}
