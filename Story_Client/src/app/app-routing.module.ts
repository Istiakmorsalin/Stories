import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent}   from './login/login.component';

export const appRoutes: Routes = [{
  path: 'registration',
  component: RegistrationComponent,
},{
  path: 'login',
  component: LoginComponent
}, 


];