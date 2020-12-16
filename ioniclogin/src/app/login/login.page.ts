import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  datosUsuario: any=[];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  formRegister(){
    this.router.navigate(['/register']);
  }

  async prosesLogin2(){

    if(this.username!="" && this.password!=""){

      var httpLogin  = 'http://aulal.org:1880/GetUserHH?name='+this.username;

      this.http.get(httpLogin)
      .subscribe(async data=>{

        this.datosUsuario = data;

        if(this.datosUsuario.length == 1){
          if(this.datosUsuario[0].password == this.password){
            this.router.navigate(['/home/'+this.datosUsuario[0].machine_ID]);
            const toast = await this.toastCtrl.create({
              message: 'Successful entry',
              duration: 2000
            });
            toast.present();
          }else{
            const toast = await this.toastCtrl.create({
              message: 'Wrong password',
              duration: 2000
            });
            toast.present();
          }
        }else{
          const toast = await this.toastCtrl.create({
            message: 'Username does not exist',
            duration: 2000
          });
          toast.present();
        }

      });
      
    }else{
      const toast = await this.toastCtrl.create({
        message: 'You have not entered the username or password',
        duration: 2000
      });
      toast.present();
    }
  }
}
