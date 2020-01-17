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

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeStarRatingComponent,
    RecipePageComponent,
    NavbarComponent,
    LoginComponent,
    LoginModalBtnComponent,
    LoginModalContentComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
