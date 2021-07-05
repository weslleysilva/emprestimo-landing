import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoTipoEmprestimoComponent } from './selecao-tipo-emprestimo.component';

const routes: Routes = [{ path: '', component: SelecaoTipoEmprestimoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecaoTipoEmprestimoRoutingModule { }
