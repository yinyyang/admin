import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';
import {UserComponent} from './user/user.component';
import {ViewComponent} from "./user/view/view.component";
import {RoleComponent} from "./role/role.component";

const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [MainGuard],
    children: [
      //default url
      { path:'',pathMatch: 'full',redirectTo: 'user' }
      ,{
      path: 'user',
      component: UserComponent,


    }, {
      path: 'user/view/:id',
      component: ViewComponent,
    },{
        path: 'role',
        component: RoleComponent,
      },
      { path:'**',redirectTo: 'user' }]
  }];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
