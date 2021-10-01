import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { NavbarModule } from 'app/components/navbar/navbar.module';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbStepperModule,
  NbTooltipModule,
} from '@nebular/theme';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    NavbarModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbTooltipModule,
    NbStepperModule,
  ],
})
export class CadastroModule {}
