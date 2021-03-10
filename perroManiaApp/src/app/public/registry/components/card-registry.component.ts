import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { PublicService } from '../../service/public.service';
import { RegistryService } from '../service/registry.service';
import { passwordValidator } from '../validator/validator';

@Component({
  selector: 'app-card-registry',
  templateUrl: './card-registry.component.html',
  styleUrls: ['./card-registry.component.css'],
})
export class CardRegistryComponent implements OnInit {
  // user: User = null;
  formRegistry: FormGroup;

  error_messages = {
    name: [{ type: 'required', message: 'Por favor, ingresá tu nombre.' }],
    lastName: [
      { type: 'required', message: 'Por favor, ingresá tu apellido.' },
    ],
    dni: [
      { type: 'required', message: 'Por favor, ingresá tu DNI.' },
      { type: 'minlength', message: 'Formato inválido.' },
      { type: 'pattern', message: 'Formato inválido.' },
    ],

    email: [
      { type: 'required', message: 'Por favor, ingresá tu email.' },
      { type: 'minlength', message: 'Email inválido.' },
      { type: 'maxlength', message: 'Email inválido.' },
      { type: 'email', message: 'Por favor, ingresá un email válido.' },
    ],

    password: [
      { type: 'required', message: 'Ingresá una contraseña.' },
      { type: 'minlength', message: 'Debe tener como mínimo 8 caracteres.' },
      { type: 'maxlength', message: 'Debe tener como máximo 12 caracteres.' },
    ],
    confirmPassword: [
      { type: 'isError', message: 'Las contraseñas no coinciden.' },
    ],
  };

  constructor(
    public publicSevice: PublicService,
    private fb: FormBuilder,
    private _registryService: RegistryService
  ) {
    this.formRegistry = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{7,8}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        passwordValidator,
      ]),
    });
    this.formRegistry.controls.password.valueChanges.subscribe((x) =>
      this.formRegistry.controls.confirmPassword.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
    console.log(this.formRegistry.get('password').errors.isError);
  }

  setUserData(): any {
    return {
      name: this.formRegistry.get('name').value,
      lastName: this.formRegistry.get('lastName').value,
      dni: this.formRegistry.get('dni').value,
      dateOfBirth: '1993-06-01',
      rol: 'USER',
      email: this.formRegistry.get('email').value,
      password: this.formRegistry.get('password').value,
      gender: 'MALE',
      country: 'Argentina',
      province: 'Mendoza',
      provincePlace: 'Capital',
    };
  }

  registerUser() {
    const user = this.setUserData();
    this._registryService.registerUser(user);
    console.log(this.registerUser());
    //si respuesta 200, redirigir a mensaje de exito
  }

  // errorMessage(field: string) {
  //   const element = this.formRegistry.controls[field];
  //   console.log(this.formRegistry.controls);
  //   let message = '';
  //   element.status === 'INVALID' && element.touched
  //     ? (message = `El campo ${field} es
  //     obligatorio`)
  //     : '';
  // }
}

//Comparador de contraseñas
// matcheoPass(controlName: string, repPass) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchControl = formGroup.contro  ls[repPass];

//     if (matchControl.errors && !matchControl.errors.mustMatch) {
//       //returno si otro validador esta funcionando todavia con un error del matchin control
//       return;
//     }
//     //si el validador falla seteo el error en match control
//     if (control.value !== matchControl.value) {
//       matchControl.setErrors({ mustMatch: true });
//       console.log(matchControl);
//     } else {
//       matchControl.setErrors(null);
//     }
//   };
// }
/*
  TEST CON API EXTERNA
  
  email: string;
  pass: string;

  registryAPI(){

    this.pass = this.formRegistry.controls.password.value;
    this.email = this.formRegistry.controls.usuario.value;

    const user = { email: this.email, password: this.pass };
    this.publicSevice.registerAPI(user).subscribe( data => {
      this.publicSevice.setTokenAPI(data.token);
    })
  }
  */
