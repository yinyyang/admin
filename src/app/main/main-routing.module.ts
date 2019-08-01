import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [MainGuard],
    children: [
      //default url
      // { path:'',pathMatch: 'full',redirectTo: 'member' },
      {
      path: 'member',
      loadChildren:'./member/member.module#MemberModule'
    },{
        path: 'ui',
        loadChildren:'./ui/ui.module#UiModule'
      },{
        path: 'icon',
        loadChildren:'./icon/icon.module#IconModule'
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
