import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})

export class DataPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }
}