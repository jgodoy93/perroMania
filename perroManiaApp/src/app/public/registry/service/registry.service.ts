import { Injectable } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { environment } from '../../../../environments/environment';
import { BaseService } from 'src/app/core/Service/base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistryService extends BaseService {
  urlServer = environment.urlAgustin;
  endpoint = 'user';

  registerUser(user: User) {
    console.log(user);
    this.post(user);
  }
}
