import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  @Input() fixed: boolean = true;
  mobileActions: NbMenuItem[] = [
    { title: 'Sobre a Elleve' },
    { title: 'Ajuda' },
    { title: 'Entrar', link: '/login' },
    {
      title: 'Simular Empréstimo',
      icon: 'options-2-outline',
      link: '/selecionar-tipo-emprestimo',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
