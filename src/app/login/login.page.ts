import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string = '';
  userPass: string = '';

  checkUserName() {

      if(this.userName.length < 3 || this.userName.length > 8) {
        this.presentToast("El nombre de usuario debe tener entre 3 a 8 letras")
      } else {
        let navigationExtras: NavigationExtras = {
          state: {
            usuarioEnviado: this.userName,
            passwordEnviada: this.userPass
          }
        }
        this.router.navigate(['/home'], navigationExtras)
      
    }
  }


  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

}

