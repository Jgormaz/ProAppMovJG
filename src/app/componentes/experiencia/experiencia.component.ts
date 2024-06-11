import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent  implements OnInit {

  empresa: string = '';
  anoInicio: number = 0;
  trabajandoActualmente: boolean = true;
  anoTermino: number | null = null;
  cargo: string = '';

  constructor() { }

  ngOnInit() {}

  onChangeTrabajandoActualmente() {
    if (this.trabajandoActualmente) {
      this.anoTermino = null;
    }
  }

}
