import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { NavbarModule } from 'app/components/navbar/navbar.module';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbStepperModule,
  NbTooltipModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroRoutingModule,
    NavbarModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbTooltipModule,
    NbStepperModule,
    NbCardModule,
    NbFormFieldModule,
    NbCheckboxModule,
    NgxMaskModule.forRoot(),
  ],
})
export class CadastroModule {}
