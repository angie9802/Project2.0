import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    private storage: Storage,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  formRegister(){
    this.router.navigate(['/register']);
  }

  async prosesLogin2(){

    if(this.username!=""&&this.password!=""){

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
            this.router.navigate(['/home']);
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

  async prosesLogin(){
    
    //let datosUsuarios: any=[];

    if(typeof(this.username)!='undefined' && typeof(this.password)!='undefined'){
      var httpLogin  = 'http://aulal.org:1880/GetUserHH?name='+this.username;
      this.http.get(httpLogin)
      .subscribe(data=>{
        console.log("original:");
        console.log(data);
        this.datosUsuarios = data;
      });

      //this.datosUsuarios = this.datosUsuarios[0];
      //console.log(typeof(this.datosUsuarios));
      console.log("extraído:");
      console.log(this.datosUsuarios);
      //console.log(this.datosUsuarios[0]);
      console.log(this.datosUsuarios.length);
      //console.log("Username: "+ this.username);
      //console.log("Password: "+this.password);
      //console.log(typeof(this.username)=='undefined');

      if(this.datosUsuarios.length == 1){
        if(this.datosUsuarios[0].password = this.password){
          this.router.navigate(['/home']);
          const toast = await this.toastCtrl.create({
          message: 'Ingreso exitoso',
          duration: 2000
        });
        toast.present();
        }else{
          console.log("Contraseña incorrecta");
          const toast = await this.toastCtrl.create({
          message: "Contraseña incorrecta",
          duration: 2000
        });
        toast.present();
        }
      }else{
        ///*
        console.log("escriba un nombre de usuario válido");
        const toast = await this.toastCtrl.create({
          message: "escriba un nombre de usuario válido",
          duration: 2000
        });
        toast.present();
        //*/
      }
    /*
    let body = {
    username : this.username,
    password : this.password,
    aksi: 'login'
    };
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
      var alertmsg = data.msg;
      if (data.succes){
        this.storage.set('session_storage', data.result);
        this.router.navigate(['/home']);
        const toast = await this.toastCtrl.create({
          message: 'Ingreso exitoso',
          duration: 2000
        });
        toast.present();
        console.log(data);
      }else{
        const toast = await this.toastCtrl.create({
          message: alertmsg,
          duration: 2000
        });
        toast.present();
      }
    });
    */
      }else{
        const toast = await this.toastCtrl.create({
          message: 'No ha ingresado el usario o la contraseña',
          duration: 2000
        });
        toast.present();
      }

  }
}
