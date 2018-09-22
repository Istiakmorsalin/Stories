import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent}   from './login/login.component';
import {CreateComponent}   from './story/create/create.component';

export const appRoutes: Routes = [{
  path: 'registration',
  component: RegistrationComponent,
},{
  path: 'login',
  component: LoginComponent
}, {
  path: 'create-story',
  component: CreateComponent
}, 


];