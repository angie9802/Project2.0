import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MachineIDService } from '../machine-id.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username: string;
  password: string;
  datosUsuarios: any=[];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private http: HttpClient,
    public machineIDserv: MachineIDService
  ) { }

  ngOnInit() {
  }
  formRegister(){
    this.router.navigate(['/register']);
  }

  async prosesLogin2(){

    if(this.username!="" && this.password!=""){

      var httpLogin  = 'http://aulal.org:1880/GetUserHH?name='+this.username;

      this.http.get(httpLogin)
      .subscribe(async data=>{

        console.log("original:");
        console.log(data);
        this.datosUsuarios = data;

        console.log("extraído:");
        console.log(this.datosUsuarios);
        console.log("Longitud: " + this.datosUsuarios.length);

        if(this.datosUsuarios.length == 1){
          console.log("password ingresada: "+this.password);
          console.log("password correcta: "+this.datosUsuarios[0].password);
          if(this.datosUsuarios[0].password == this.password){
            this.machineIDserv.machineID = this.datosUsuarios[0].machine_ID;
            console.log("machineId= " + this.machineIDserv.machineID)
            this.machineIDserv.patientID = this.datosUsuarios[0].id;
            this.router.navigate(['/home/'+this.datosUsuarios[0].machine_ID]);
            const toast = await this.toastCtrl.create({
              message: 'Ingreso exitoso',
              duration: 2000
            });
            toast.present();
          }else{
            const toast = await this.toastCtrl.create({
              message: 'Contraseña errónea',
              duration: 2000
            });
            toast.present();
          }
        }else{
          const toast = await this.toastCtrl.create({
            message: 'Nombre de usuario no existe',
            duration: 2000
          });
          toast.present();
        }

      });
      
    }else{
      const toast = await this.toastCtrl.create({
        message: 'No ha ingresado el usario o la contraseña',
        duration: 2000
      });
      toast.present();
    }
  }
}
