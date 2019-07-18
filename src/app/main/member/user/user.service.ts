import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/internal/observable/dom/ajax';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.apiUrl;
  constructor() { }

  getUsers(): any {
   return   ajax(this.API_URL+'/user');

  }

  getOneUser(id): any {
  return   ajax(this.API_URL+'/user/'+id);
}
}
