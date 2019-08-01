import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IconComponent} from "./icon.component";
import {BootstrapComponent} from "./bootstrap/bootstrap.component";

const routes: Routes = [{
  path: '',
  component: IconComponent,
  children: [ {
    path: 'bootstrap',
    component:BootstrapComponent
  }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule { }
