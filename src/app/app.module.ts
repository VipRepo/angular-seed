import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// import { HttpModule } from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import { APP_ROUTING } from './app.routing';
import {APP_CONFIG, AppConfig} from './config/app.config';

import { LangComponent } from './route/language/language.component';
import { LangService } from './route/language/language.service';

import { RepoComponent } from './route/repository/repository.component';
import { RepoService } from './route/repository/repository.service';

import { PagerComponent } from './route/pager/pager.component';
import { FilterPipe } from './route/pipe/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        APP_ROUTING,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LangComponent,
        RepoComponent,
        PagerComponent,
        FilterPipe
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        LangService,
        RepoService,
        { provide: APP_CONFIG, useValue: AppConfig }
    ]
})
export class AppModule { }
