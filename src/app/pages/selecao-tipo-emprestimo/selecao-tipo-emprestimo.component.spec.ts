import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoTipoEmprestimoComponent } from './selecao-tipo-emprestimo.component';

describe('SelecaoTipoEmprestimoComponent', () => {
  let component: SelecaoTipoEmprestimoComponent;
  let fixture: ComponentFixture<SelecaoTipoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoTipoEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoTipoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
