import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableshowDirective} from "./tableshow.directive";

@NgModule({
  declarations: [TableshowDirective],
  imports: [
    CommonModule
  ],
  exports:[TableshowDirective]
})
export class DirectiveModule { }
