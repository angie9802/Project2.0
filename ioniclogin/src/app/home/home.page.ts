import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/login']);
  }

  goMessage(){
    this.router.navigate(['/data-fisio']);
  }

  goCalendar(){
    this.router.navigate(['/calendar1']);
  }

  goData(){
    this.router.navigate(['/data']);
  }

  goDataFisio(){
    this.router.navigate(['/data-fisio']);
  }

  goFormula(){
    this.router.navigate(['/formula']);
  }
}
