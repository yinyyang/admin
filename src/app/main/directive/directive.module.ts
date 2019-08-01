import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableshowDirective} from "./tableshow.directive";
import { ElshowDirective } from './elshow.directive';
import { TabbableshowDirective } from './tabbableshow.directive';

@NgModule({
  declarations: [TableshowDirective, ElshowDirective, TabbableshowDirective],
  imports: [
    CommonModule
  ],
  exports: [TableshowDirective, TabbableshowDirective]
})
export class DirectiveModule { }
