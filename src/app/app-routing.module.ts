import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'selecionar-tipo-emprestimo',
    loadChildren: () =>
      import(
        './pages/selecao-tipo-emprestimo/selecao-tipo-emprestimo.module'
      ).then((m) => m.SelecaoTipoEmprestimoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
