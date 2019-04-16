import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [MainGuard]
})
export class MainModule { }
