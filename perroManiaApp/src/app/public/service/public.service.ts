import { Injectable } from '@angular/core';
import { BaseService } from '../../core/Service/base.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PublicService extends BaseService{
  //Test Con Api RickandMory
  urlServer = environment.urlTestRickAndMorty;

  getAll() {
    this.setEndPoint('character');
    return this.get();
  }












  /*
    Test con Api Externa
  
  loginAPI(user : any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  registerAPI(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }  
  setTokenAPI(token: string){
    this.cookies.set('token',token);
  }
  getTokenAPI(){
    return this.cookies.get('token');
  }
  getUserAPI(){
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getTokenAPI();
  }
  */

}
