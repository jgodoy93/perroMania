import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/core/Service/swal.service';
import { PublicService } from '../../service/public.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-card-loggin',
  templateUrl: './card-loggin.component.html',
  styleUrls: ['./card-loggin.component.css'],
  
})
export class CardLogginComponent implements OnInit {
  formLogin: FormGroup;

  FormObject = {
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  }

  constructor(
    private service: LoginService, 
    private swal: SwalService, 
    public publicService: PublicService,
    public router: Router) { }
  
  ngOnInit() {
    this.formLogin = new FormGroup(this.FormObject);
    //this.swal.normalMessage({html: 'Enable Sweet alert'});
  }
  login() {
    this.service.auth(this.formLogin.value);
  }

  /*
  TEST CON API EXTERNA
  */
  email: string;
  pass: string; 

  loginAPI(){

    this.pass = this.formLogin.controls.password.value;
    this.email = this.formLogin.controls.usuario.value;

    const user = { email: this.email, password: this.pass};
    this.publicService.loginAPI(user).subscribe( data => {
      this.publicService.setTokenAPI(data.token);
      this.router.navigate(['home']);
    });
    
  }


}
