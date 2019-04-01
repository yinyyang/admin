import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';

const routes: Routes = [
  {  path : 'main',
  component : MainComponent,
    canActivate : [MainGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
