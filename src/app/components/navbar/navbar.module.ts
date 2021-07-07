import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconModule, NbLayoutModule } from '@nebular/theme';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    RouterModule,
    NbButtonModule,
    NbIconModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
