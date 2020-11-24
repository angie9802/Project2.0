import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string = "";
  password: string = "";
  confirm_password : string = "";

  ////////
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController
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


    let body = {
    username : this.username,
    password : this.password,
    aksi: 'registro'
    };
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
      var alertmsg = data.msg;
      if (data.succes){
        this.router.navigate(['/login']);
        const toast = await this.toastCtrl.create({
          message: 'Registro exitoso.',
          duration: 2000
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: alertmsg,
          duration: 2000
        });
      }
    });

  }
}
}
