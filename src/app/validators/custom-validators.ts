import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static CPF(controle: AbstractControl): ValidationErrors | null {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp("[0-9]{11}");

    if (
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) return null;

    controle.setErrors({ ...controle.errors, invalidCPF: true });
    controle.parent?.setErrors({
      ...controle.parent?.errors,
      invalidCPF: true,
    });
    return { invalidCPF: true };
  }

  static MoreThan18YearsOld(
    controle: AbstractControl,
  ): ValidationErrors | null {
    if (!controle?.value) {
      return null;
    }

    const nascimento = controle.value as string;
    const [ano, mes, dia] = nascimento.split("-").map((value) => Number(value));
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    controle.setErrors({ ...controle.errors, lessThan18YearsOld: true });
    controle.parent?.setErrors({
      ...controle.parent?.errors,
      lessThan18YearsOld: true,
    });
    return { lessThan18YearsOld: true };
  }

  static SamePassword(controle: AbstractControl): ValidationErrors | null {
    let senha = controle.get("password")?.value;
    let confirmarSenha = controle.get("confirmPassword")?.value;

    if (senha === confirmarSenha) {
      return null;
    } else {
      controle.setErrors({ ...controle.errors, notSamePassword: true });
      controle.parent?.setErrors({
        ...controle.parent?.errors,
        notSamePassword: true,
      });
      return { notSamePassword: true };
    }
  }
}
