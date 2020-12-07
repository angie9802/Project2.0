import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  confirm_password : string = "";
  phone: number;
  machineID: string = "";

  ////////
  constructor(
    private router: Router,
    public toastCtrl: ToastController,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/login']);
  }
  //////
  async prosesRegister(){
    if(this.username==""){
      const toast = await this.toastCtrl.create({
        message: 'Se requiere nombre de usuario',
        duration: 2000
      });
      toast.present();
    }else if(this.password==""){
      const toast = await this.toastCtrl.create({
        message: 'Se requiere contraseña',
        duration: 2000
      });
      toast.present();

    }else if(this.password!=this.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Contraseña invalida',
        duration: 2000
      });
      toast.present();
    }else{

    var httpRegister  = 'http://aulal.org:1880/RegisterUserHH?name='+this.username+'&password='+this.password
    +'&firstName='+this.firstName+'&lastName='+this.lastName+'&email='+this.email+'&machine_ID='+this.machineID+'&phone='+this.phone;

    this.http.get(httpRegister)
    .subscribe(data=>{
      console.log(data);
    });
    console.log(httpRegister);

    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: 'Registro exitoso.',
      duration: 2000
    });
  }
}
}
