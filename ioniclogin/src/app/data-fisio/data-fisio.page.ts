import {ComApiService} from 'src/app/services/com-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-fisio',
  templateUrl: './data-fisio.page.html',
  styleUrls: ['./data-fisio.page.scss'],
})
export class DataFisioPage implements OnInit {

  machineID: string ="";
  results: Observable<any>;
  searchTerm: string = '';
  constructor(
    private router: Router,
    private CApi: ComApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
  }

  back(){
    this.router.navigate(['/home/'+this.machineID]);
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.CApi.searchFisio(this.machineID);
    console.log(this.results);
  }
}
