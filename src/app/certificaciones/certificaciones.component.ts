import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {
  
  nombreCert: string = '';
  fecha: number = 0;
  tieneVencimiento: boolean = true;
  fechaVencimiento: number | null = null;

  constructor() { }

  ngOnInit() {}

  onChangeTieneVencimiento() {
    if (!this.tieneVencimiento) {
      this.fechaVencimiento = null;
    }
  }
}
