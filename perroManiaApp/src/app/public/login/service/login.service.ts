import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/Service/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  auth(obj: any){
    this.setEndPoint('');
    return this.post(obj);
  }
  
}
