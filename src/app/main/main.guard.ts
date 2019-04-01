import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';


export class MainGuard implements  CanActivate {
   canActivate() {
     console.log('c');
     return true;
  }

}
