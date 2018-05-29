import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent],
  imports: [BrowserModule, AlertModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
