import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { DbserviceService } from '../services/autenthication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router/*, public dbtaskService:DbserviceService*/ ){

    

  }

  selectedSegment: string = 'perfil';


  segmentChanged($event: CustomEvent){
    console.log($event.detail.value);
    let direction = $event.detail.value;
    this.selectedSegment = direction;
   // this.router.navigate([direction]);
  }

  ionViewKillEnter(){
    this.router.navigate(['home/perfil']);
  }

  logout(){
    console.log("Logout");
  }



 /* usuarioRecibido: string ="";
  passwordRecibido: string ="";
  nivelEduc: string = "";
  nombre: string = "";
  apellido: string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviada'];

      }
    })
   } 

  nombreUsuario: string = "";
  apellidoUsuario: string = "";
  nivelEducacion: string = "";  
   
  limpiarCeldas(){
    this.nombreUsuario='';
    this.apellidoUsuario='';
    this.nivelEducacion='';
    
  }*/

  

}
