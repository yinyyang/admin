import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {TestComponent} from "./test/test.component";

const routes: Routes = [
   { path: '',
     redirectTo: 'login',
     pathMatch: 'full'
  },{ path: 'test',
      component:TestComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
