import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificacion',
  templateUrl: './certificacion.component.html',
  styleUrls: ['./certificacion.component.scss'],
})
export class CertificacionComponent  implements OnInit {

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
