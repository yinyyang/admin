import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { UserComponent } from './user/user.component';
import { MemberComponent } from './member.component';
import { RoleComponent } from './role/role.component';
import {PaginationComponent} from "../pagination/pagination.component";
import {FormsModule} from "@angular/forms";
import {ViewComponent} from "./user/view/view.component";
import {ModalComponent} from "./user/modal/modal.component";
import {TableshowDirective} from "../directive/tableshow.directive";
import {DirectiveModule} from "../directive/directive.module";

@NgModule({
  declarations: [ MemberComponent,UserComponent,ModalComponent,ViewComponent, RoleComponent, PaginationComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    DirectiveModule
  ]
})
export class MemberModule { }
