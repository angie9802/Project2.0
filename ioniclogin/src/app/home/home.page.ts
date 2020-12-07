import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  machineID: string ="";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
    console.log(this.machineID);
  }

  back(){
    this.router.navigate(['/login']);
  }

  goMessage(){
    this.router.navigate(['/data-fisio/'+this.machineID]);
  }

  goCalendar(){
    this.router.navigate(['/calendar1/'+this.machineID]);
  }

  goData(){
    this.router.navigate(['/data/'+this.machineID]);
  }

  goDataFisio(){
    this.router.navigate(['/data-fisio/'+this.machineID]);
  }

  goFormula(){
    this.router.navigate(['/formula/'+this.machineID]);
  }
}
