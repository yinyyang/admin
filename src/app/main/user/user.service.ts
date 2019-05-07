import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/internal/observable/dom/ajax';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): any {
   return   ajax('https://jsonplaceholder.typicode.com/users');

  }
}
