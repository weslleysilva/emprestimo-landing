import { NavbarModule } from 'app/components/navbar/navbar.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule } from '@nebular/theme';

import { SimulacaoNegadaRoutingModule } from './simulacao-negada-routing.module';
import { SimulacaoNegadaComponent } from './simulacao-negada.component';

@NgModule({
  declarations: [SimulacaoNegadaComponent],
  imports: [
    CommonModule,
    SimulacaoNegadaRoutingModule,
    NavbarModule,
    NbIconModule,
  ],
})
export class SimulacaoNegadaModule {}
