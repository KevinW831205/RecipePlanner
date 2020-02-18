import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltererComponent } from './shared/components/filterer/filterer.component';
import { LoginModalBtnComponent } from './login-modal-btn/login-modal-btn.component';
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupSuccessModalComponent } from './signup-success-modal/signup-success-modal.component';


@NgModule({
  declarations: [
    AppComponent,
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
  entryComponents: [
    LoginModalContentComponent,
    SignupSuccessModalComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomFormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AdminModule,
    SharedModule,
    RecipeModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
