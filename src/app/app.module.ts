import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routing';
import { APP_CONFIG, AppConfig } from './config/app.config';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    NgbModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent


  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ]
})
export class AppModule { }
