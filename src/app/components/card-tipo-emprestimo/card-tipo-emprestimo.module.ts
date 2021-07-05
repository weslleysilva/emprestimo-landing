import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';

import { CardModule } from '../card/card.module';
import { CardTipoEmprestimoComponent } from './card-tipo-emprestimo.component';

@NgModule({
  declarations: [CardTipoEmprestimoComponent],
  imports: [CommonModule, CardModule, NbButtonModule],
  exports: [CardTipoEmprestimoComponent],
})
export class CardTipoEmprestimoModule {}
