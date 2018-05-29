import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, CollapseModule.forRoot(), BsDropdownModule.forRoot(), AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
