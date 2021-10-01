import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  firstCreateAccountForm?: FormGroup;
  secondCreateAccountForm?: FormGroup;
  constructor(private _location: Location, private fb: FormBuilder) {
    this.initFirstCreateAccoutForm();
    this.initSecondCreateAccountForm();
  }

  ngOnInit(): void {}

  initFirstCreateAccoutForm() {
    this.firstCreateAccountForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirm: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      canReceiveEmail: [false],
      acceptedTerms: [false],
    });
  }

  initSecondCreateAccountForm() {
    this.secondCreateAccountForm = this.fb.group({
      cpf: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  goToBackPage() {
    this._location.back();
  }
}
