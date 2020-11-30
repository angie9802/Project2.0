import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.page.html',
  styleUrls: ['./formula.page.scss'],
})
export class FormulaPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }
}
