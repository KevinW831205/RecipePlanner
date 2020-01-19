import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeStarRatingComponent } from './recipe-star-rating/recipe-star-rating.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalBtnComponent } from './login-modal-btn/login-modal-btn.component';
import { LoginComponent } from './login/login.component'
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeStarRatingComponent,
    RecipePageComponent,
    NavbarComponent,
    LoginComponent,
    LoginModalBtnComponent,
    LoginModalContentComponent,
    SignupFormComponent,
    ProfileComponent,
    RecipeDetailPageComponent,
    InstructionsComponent,
    IngredientsComponent
  ],
  entryComponents: [
    LoginModalContentComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
