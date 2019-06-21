import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import { Css3loadingComponent } from './anminations/css3loading/css3loading.component';
import { GifloadingComponent } from './anminations/gifloading/gifloading.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    Css3loadingComponent,
    GifloadingComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
