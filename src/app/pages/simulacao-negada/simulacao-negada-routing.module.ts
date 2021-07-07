import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoNegadaComponent } from './simulacao-negada.component';

const routes: Routes = [{ path: '', component: SimulacaoNegadaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulacaoNegadaRoutingModule { }
