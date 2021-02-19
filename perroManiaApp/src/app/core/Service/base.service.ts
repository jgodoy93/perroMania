import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer: string = environment.url;
  endpoint: string = '';
  constructor(private http: HttpClient) {}

  setEndPoint(endpoint){
    this.endpoint = endpoint;
  }

  handlerError({status}){
    if(status === 401){
      //unauthorized
    }else if(status === 500){
      //Internal server error
      //location.hfer = 'https://http.cat/'+ status; 
    }
  }

  async get() {
    try{
      //Tener en cuenta que dentro de get(), se combina el string de urlServer+endpoint
      //por lo tanto el endpoint debe llevar '/' ej: urlServer/empleados sino salta error 
      return await this.http
      .get(`${this.urlServer}/${this.endpoint}`)
      .toPromise();
    }catch (e){
      this.handlerError(e);
    }
  }

  async post(body){
    try{
      return await this.http
      .post(`${this.urlServer}/${this.endpoint}`,body)
      .toPromise();
    }catch(e){
      this.handlerError(e);
    }
  }
}
