import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [MainGuard],
    children: [{
      path: 'user',
      component: UserComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
