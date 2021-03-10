import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'; 
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
 
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer: string = environment.url;
  endpoint: string = '';
  constructor(
    public http: HttpClient, 
    public router: Router, 
    public cookies: CookieService
    ) {}
  setEndPoint(endpoint){
    this.endpoint = endpoint;
  }

  private getHttpOptions() {
    let httpOptions = {};
    const token = localStorage.getItem('JWT');
    //Si no esta en LocalStorage consultar en sessionStorage
    if(token){
      httpOptions = {
        headers: new HttpHeaders({
          Authorization: token,
        }),
      };
    }
    return httpOptions;
  }
  
  handlerError({status}){
    status === 401 ? this.router.navigate(['login']) : null;
    status === 404 ? this.router.navigate(['notfound']) : null;    
  }

  async get() {
    try{
      //Tener en cuenta que dentro de get(), se combina el string de urlServer+endpoint
      //por lo tanto el endpoint debe llevar '/' ej: urlServer/empleados sino salta error 
      return await this.http
      .get(`${this.urlServer}/${this.endpoint}`, this.getHttpOptions())
      .toPromise();
    }catch (e){
      this.handlerError(e);
    }
  }

  async post(body){
    try{
      return await this.http
      .post(`${this.urlServer}/${this.endpoint}`,body,this.getHttpOptions())
      .toPromise();
    }catch(e){
      this.handlerError(e);
    }
  }
}

/* 
  TODO: Hacer Put y Delete
*/
