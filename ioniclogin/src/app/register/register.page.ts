import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';

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

  constructor(
    private router: Router,
    public toastCtrl: ToastController,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  back(){
    this.router.navigate(['/login']);
  }

  async prosesRegister(){
    if(this.username=="" || this.password=="" || this.firstName=="" || this.lastName==""
    || this.email=="" || this.phone==null || this.machineID==""){
      const toast = await this.toastCtrl.create({
        message: 'please fill in all the fields',
        duration: 2000
      });
      toast.present();
    }else if(this.password!=this.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'password fields do not match',
        duration: 2000
      });
      toast.present();
    }else{
    
      let postData = {
              "name": this.username,
              "password": this.password,
              "firstName": this.firstName,
              "lastName": this.lastName,
              "email": this.email,
              "machine_ID": this.machineID,
              "phone": this.phone
      }

      this.http.post("http://aulal.org:1880/RegisterUserHH", postData).subscribe();

      this.router.navigate(['/login']);
      const toast = await this.toastCtrl.create({
        message: 'Registro exitoso.',
        duration: 2000
      });
  }
}
}
