import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {ViewComponent} from './view/view.component';
import {PaginationComponent} from '../pagination/pagination.component';
import {TableshowDirective} from '../../directive/tableshow.directive';
import {FormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [  UserComponent, TableshowDirective, PaginationComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule
  ],
  entryComponents: [ViewComponent]
})
export class UserModule { }
