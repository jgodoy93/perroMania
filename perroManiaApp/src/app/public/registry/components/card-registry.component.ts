import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PublicService } from '../../service/public.service';

@Component({
  selector: 'app-card-registry',
  templateUrl: './card-registry.component.html',
  styleUrls: ['./card-registry.component.css']
})
export class CardRegistryComponent implements OnInit {

  formRegistry: FormGroup;

  FormObject = {
    usuario: new FormControl('',Validators.required),
    mail: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    repPass: new FormControl('',Validators.required)
  }

  constructor(public publicSevice: PublicService) { }

  ngOnInit(): void {
    this.formRegistry = new FormGroup(this.FormObject);
  }

  registry(){
    console.log(this.FormObject);
  }

  verifyField(field: string) : string{
    
    const element = this.formRegistry.controls[field];
    let message = "";
    element.status === "INVALID" && element.touched ? message= `El campo ${field} es
    obligatorio`: "";
    return message;
  }


  //Comparador de contraseñas 
  matcheoPass(controlName: string, matchcontrolName) {
    return (formGroup : FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchcontrolName];

      if(matchControl.errors && !matchControl.errors.mustMatch){
        //returno si otro validador esta funcionando todavia con un error del matchin control
        return;
      }
      //si el validador falla seteo el error en match control
      if(control.value !== matchControl.value){
        matchControl.setErrors({mustMatch: true});
      } else {
        matchControl.setErrors(null);
      }

    }
  }
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


}
