import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoNegadaComponent } from './simulacao-negada.component';

describe('SimulacaoNegadaComponent', () => {
  let component: SimulacaoNegadaComponent;
  let fixture: ComponentFixture<SimulacaoNegadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoNegadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoNegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
