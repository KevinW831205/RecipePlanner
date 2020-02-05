import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeStarRatingComponent } from './recipe-star-rating/recipe-star-rating.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalBtnComponent } from './login-modal-btn/login-modal-btn.component';
import { LoginComponent } from './login/login.component'
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AuthorMediaComponent } from './author-media/author-media.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CategoryTagsPageComponent } from './admin/category-tags-page/category-tags-page.component';
import { RecipeService } from './services/recipe.service';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CustomFormsModule } from 'ng2-validation';
import { AccountService } from './services/account.service';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';

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
    IngredientsComponent,
    AuthorMediaComponent,
    AdminProfileComponent,
    CategoryTagsPageComponent,
    NewRecipeFormComponent,
    SignupPageComponent,
    MyRecipesComponent,
  ],
  entryComponents: [
    LoginModalContentComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomFormsModule,
  ],
  providers: [
    RecipeService,
    AccountService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
