import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';
import {MainGuard} from './main.guard';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MidcontainerComponent } from './midcontainer/midcontainer.component';
import { ContentbarComponent } from './contentbar/contentbar.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent, ContentComponent, MidcontainerComponent, ContentbarComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [MainGuard]
})
export class MainModule { }
