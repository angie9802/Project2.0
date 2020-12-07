import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  machineID: string ="";
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.machineID = this.route.snapshot.paramMap.get('machineID');
  }

  back(){
    this.router.navigate(['/home/'+this.machineID]);
  }
}
