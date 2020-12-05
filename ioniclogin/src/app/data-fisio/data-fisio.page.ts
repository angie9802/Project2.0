import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-fisio',
  templateUrl: './data-fisio.page.html',
  styleUrls: ['./data-fisio.page.scss'],
})
export class DataFisioPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }
}
