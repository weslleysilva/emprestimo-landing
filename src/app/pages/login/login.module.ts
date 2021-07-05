import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
  ],
})
export class LoginModule {}
