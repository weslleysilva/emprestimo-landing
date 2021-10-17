import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { CustomValidators } from "app/validators/custom-validators";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  initialDataForm?: FormGroup;
  consultDataForm?: FormGroup;
  showPassword: boolean;
  constructor(private _location: Location, private fb: FormBuilder) {
    this.showPassword = false;
    this.initializeInitialDataForm();
    this.initializeConsultDataForm();
  }

  ngOnInit(): void {}

  initializeInitialDataForm() {
    this.initialDataForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirm: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      canReceiveEmail: [false],
      acceptedTerms: [false, [Validators.requiredTrue]],
    });

    // Apagar esta linha
    this.initialDataForm.patchValue({
      email: "teste@teste.com",
      emailConfirm: "teste@teste.com",
      phone: "27999999999",
      password: "12345678",
      canReceiveEmail: false,
      acceptedTerms: true,
    });
  }

  initializeConsultDataForm() {
    this.consultDataForm = this.fb.group({
      cpf: [null, [Validators.required, CustomValidators.CPF]],
      fullName: [null, [Validators.required]],
      birthDate: [
        null,
        [Validators.required, CustomValidators.MoreThan18YearsOld],
      ],
      motherFullName: [null, [Validators.required]],
      ownerOfData: [false, [Validators.requiredTrue]],
      allowExternalConsult: [false, [Validators.requiredTrue]],
    });

    // Apagar esta linha
    this.consultDataForm.patchValue({
      cpf: "16131646708",
      fullName: "Teste do Teste",
      birthDate: "1999-09-09",
      motherFullName: "Mãe Teste",
      ownerOfData: true,
      allowExternalConsult: true,
    });
  }

  getCurrentPasswordInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  initialDataFormSubmit(ngForm: FormGroupDirective) {
    if (this.initialDataForm?.invalid) {
      alert("Preenchimento incorreto");
      console.log(this.initialDataForm);
    }
  }

  consultDataFormSubmit(ngForm: FormGroupDirective) {
    if (this.consultDataForm?.invalid) {
      alert("Preenchimento incorreto");
      console.log(this.consultDataForm);
    }
  }

  goToBackPage() {
    this._location.back();
  }
}
