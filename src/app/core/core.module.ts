import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginModalBtnComponent } from './login-modal-btn/login-modal-btn.component';
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupSuccessModalComponent } from './signup-success-modal/signup-success-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    LoginModalBtnComponent,
    LoginModalContentComponent,
    SignupFormComponent,
    ProfileComponent,
    SignupPageComponent,
    SignupSuccessModalComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  entryComponents: [
    LoginModalContentComponent,
    SignupSuccessModalComponent,
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
    LoginModalBtnComponent,
    LoginModalContentComponent,
    SignupFormComponent,
    ProfileComponent,
    SignupPageComponent,
    SignupSuccessModalComponent,
    LoginPageComponent,
  ]
})
export class CoreModule { }
