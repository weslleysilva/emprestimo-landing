import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-tipo-emprestimo',
  templateUrl: './selecao-tipo-emprestimo.component.html',
  styleUrls: ['./selecao-tipo-emprestimo.component.scss'],
})
export class SelecaoTipoEmprestimoComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  goToBackPage() {
    this._location.back();
  }
}
