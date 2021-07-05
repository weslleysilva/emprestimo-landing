import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTipoEmprestimoComponent } from './card-tipo-emprestimo.component';

describe('CardTipoEmprestimoComponent', () => {
  let component: CardTipoEmprestimoComponent;
  let fixture: ComponentFixture<CardTipoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTipoEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTipoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
