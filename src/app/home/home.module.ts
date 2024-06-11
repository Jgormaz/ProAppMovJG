import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { ExperienciaComponent } from '../componentes/experiencia/experiencia.component';
import { CertificacionComponent } from '../componentes/certificacion/certificacion.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage, ExperienciaComponent, CertificacionComponent]
})
export class HomePageModule {}
