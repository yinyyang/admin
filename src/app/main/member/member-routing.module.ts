import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {MemberComponent} from "./member.component";
import {RoleComponent} from "./role/role.component";
import {ViewComponent} from "./user/view/view.component";

const routes: Routes = [{
  path: '',
  component: MemberComponent,
  children: [ {
    path: 'user',
    component: UserComponent
  },{
    path: 'user/:id',
    component: ViewComponent
  }, {
    path: 'role',
    component: RoleComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
