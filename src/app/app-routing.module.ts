import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "cadastro",
    // loadChildren: () =>
    //   import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "selecionar-tipo-emprestimo",
    loadChildren: () =>
      import(
        "./pages/selecao-tipo-emprestimo/selecao-tipo-emprestimo.module"
      ).then((m) => m.SelecaoTipoEmprestimoModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "cadastro",
    loadChildren: () =>
      import("./pages/cadastro/cadastro.module").then((m) => m.CadastroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
