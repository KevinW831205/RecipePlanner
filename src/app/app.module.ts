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
import { AuthorMediaComponent } from './author-media/author-media.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { CategoryTypeaheadComponent } from './category-typeahead/category-typeahead.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { FiltererComponent } from './filterer/filterer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginModalBtnComponent } from './login-modal-btn/login-modal-btn.component';
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewRecipeBtnComponent } from './new-recipe-btn/new-recipe-btn.component';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';
import { NewRecipeModalComponent } from './new-recipe-modal/new-recipe-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SummaryPipe } from './recipe-card/summary.pipe';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeStarRatingComponent } from './recipe-star-rating/recipe-star-rating.component';
import { SharedModule } from './shared/shared.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupSuccessModalComponent } from './signup-success-modal/signup-success-modal.component';


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
    NewRecipeFormComponent,
    SignupPageComponent,
    MyRecipesComponent,
    SignupSuccessModalComponent,
    LoginPageComponent,
    SummaryPipe,
    NewRecipeBtnComponent,
    NewRecipeModalComponent,
    EditRecipePageComponent,
    FiltererComponent,
    CategoryDropdownComponent,
    CategoryTypeaheadComponent,
  ],
  entryComponents: [
    LoginModalContentComponent,
    SignupSuccessModalComponent,
    NewRecipeModalComponent
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
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
