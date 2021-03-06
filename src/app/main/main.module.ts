import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';
import {HeaderComponent} from "./layout/header/header.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {ContentComponent} from "./layout/content/content.component";
import {MidcontainerComponent} from "./layout/midcontainer/midcontainer.component";
import {ContentbarComponent} from "./layout/contentbar/contentbar.component";
import { ResizeDirective } from './directive/resize.directive';
import {CustomFormsModule} from 'ng2-validation';


@NgModule({
  declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent, ContentComponent, MidcontainerComponent, ContentbarComponent, ResizeDirective],
  imports: [
    CommonModule,
    MainRoutingModule,
    CustomFormsModule
  ],
  providers: [MainGuard]
})
export class MainModule { }
