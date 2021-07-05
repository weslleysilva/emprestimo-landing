import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NbLayoutModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
