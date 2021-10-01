import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  initialDataForm?: FormGroup;
  consultInitialDataForm?: FormGroup;
  showPassword: boolean;
  constructor(private _location: Location, private fb: FormBuilder) {
    this.showPassword = false;
    this.initializeInitialDataForm();
    this.initializeConsultInitialDataForm();
  }

  ngOnInit(): void {}

  initializeInitialDataForm() {
    this.initialDataForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirm: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      canReceiveEmail: [false],
      acceptedTerms: [false],
    });
  }

  initializeConsultInitialDataForm() {
    this.consultInitialDataForm = this.fb.group({
      cpf: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  getCurrentPasswordInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  goToBackPage() {
    this._location.back();
  }
}
