import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {ViewComponent} from './view/view.component';
import {PaginationComponent} from '../pagination/pagination.component';
import {TableshowDirective} from '../../directive/tableshow.directive';
import {FormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import {RouterModule} from "@angular/router";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [  UserComponent, TableshowDirective, PaginationComponent, ViewComponent, ModalComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    RouterModule
  ],
  entryComponents: [ModalComponent]
})
export class UserModule { }
