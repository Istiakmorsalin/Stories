import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import { HttpRequestService } from './core/service/http/http-service.service';

import { AppComponent } from './app.component';
import { DataService } from './core/service/data/data.service';

import { appRoutes } from './app-routing.module';


import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import {LoginComponent}   from './login/login.component';
import { LoginService } from './login/login.service';
import {CreateComponent}   from './story/create/create.component';
import {StoryService} from './story/story.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpRequestService,RegistrationService, LoginService,StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
