import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PublicService } from '../../service/public.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public publicService: PublicService) { }

  navegar(){
    this.router.navigate(['home/perros']);
  }

  ngOnInit(): void {
    this.getUserLogged();
  }

  

  nombre : string;
  apellido: string;
  token: string;

  getUserLogged() {
    this.token = this.publicService.getTokenAPI();
    console.log(this.token);
    this.publicService.getUserAPI().subscribe( user => {
      
      this.nombre = user.data.first_name;
      this.apellido = user.data.last_name;
      
    }
    );
  }
  cerrarSession(){
    this.publicService.cookies.delete('token');
    this.router.navigate(['login']);
  }

}
