import {
    CardTipoEmprestimoModule
} from 'app/components/card-tipo-emprestimo/card-tipo-emprestimo.module';
import { NavbarModule } from 'app/components/navbar/navbar.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule, NbTooltipModule } from '@nebular/theme';

import { SelecaoTipoEmprestimoRoutingModule } from './selecao-tipo-emprestimo-routing.module';
import { SelecaoTipoEmprestimoComponent } from './selecao-tipo-emprestimo.component';

@NgModule({
  declarations: [SelecaoTipoEmprestimoComponent],
  imports: [
    CommonModule,
    SelecaoTipoEmprestimoRoutingModule,
    NavbarModule,
    CardTipoEmprestimoModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
  ],
})
export class SelecaoTipoEmprestimoModule {}
