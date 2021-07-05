import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tipo-emprestimo',
  templateUrl: './card-tipo-emprestimo.component.html',
  styleUrls: ['./card-tipo-emprestimo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTipoEmprestimoComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() features: string[] = [];
  @Input() image = '';

  constructor() {}

  ngOnInit(): void {}
}
