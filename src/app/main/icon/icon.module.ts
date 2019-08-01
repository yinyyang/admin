import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import {IconComponent} from "./icon.component";
import {NgbButtonsModule, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [IconComponent,BootstrapComponent],
  imports: [
    CommonModule,
    IconRoutingModule,
    NgbDatepickerModule,
    NgbModule
  ]
})
export class IconModule { }
