import {
    CardTipoEmprestimoModule
} from 'app/components/card-tipo-emprestimo/card-tipo-emprestimo.module';
import { NavbarModule } from 'app/components/navbar/navbar.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    NbButtonModule,
    RouterModule,
    CardTipoEmprestimoModule,
  ],
})
export class HomeModule {}
