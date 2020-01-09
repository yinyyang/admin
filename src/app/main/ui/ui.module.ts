import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { PanelComponent } from './panel/panel.component';
import {FormsModule} from "@angular/forms";
import {DirectiveModule} from "../directive/directive.module";
import {MemberModule} from "../member/member.module";
import { TabpanelComponent } from './tabpanel/tabpanel.component';

@NgModule({
  declarations: [UiComponent, FormComponent, TableComponent, PanelComponent, TabpanelComponent],
  exports: [
    PanelComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule,
    DirectiveModule
  ]
})
export class UiModule { }
