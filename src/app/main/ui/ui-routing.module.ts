import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UiComponent} from "./ui.component";
import {FormComponent} from "./form/form.component";
import {TableComponent} from "./table/table.component";
import {PanelComponent} from "./panel/panel.component";
import {TabpanelComponent} from "./tabpanel/tabpanel.component";

const routes: Routes = [{
  path: '',
  component: UiComponent,
  children: [ {
    path: 'form',
    component:FormComponent
  },{
    path: 'table',
    component: TableComponent
  },{
      path: 'panel',
      component: PanelComponent
  },{
    path: 'tabpanel',
    component: TabpanelComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
