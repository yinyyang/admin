import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ajax} from "rxjs/ajax";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  API_URL = environment.apiUrl;
  constructor() { }

  getMenu(): any {
    return   ajax(this.API_URL+'/menu');

  }
}
