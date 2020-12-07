import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})

export class DataPage implements OnInit {

  machineID: string ="";
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
    console.log(this.machineID);
  }

  back(){
    this.router.navigate(['/home/'+this.machineID]);
  }
  
}