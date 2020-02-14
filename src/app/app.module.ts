import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AccountsComponent } from './admin/components/accounts/accounts.component';
import { CategoryTagsPageComponent } from './admin/components/category-tags-page/category-tags-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorMediaComponent } from './author-media/author-media.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { CategoryTypeaheadComponent } from './category-typeahead/category-typeahead.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
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
import { AccountService } from './services/account.service';
import { CategoryService } from './services/category.service';
import { ErrorService } from './services/error.service';
import { FilterService } from './services/filter.service';
import { IngredientService } from './services/ingredient.service';
import { InstructionService } from './services/instruction.service';
import { RatingService } from './services/rating.service';
import { RecipeService } from './services/recipe.service';
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
    CategoryTagsPageComponent,
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
    AccountsComponent,
    CategoryDropdownComponent,
    CategoryTypeaheadComponent,
    ErrorAlertComponent,
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
    FontAwesomeModule
  ],
  providers: [
    RecipeService,
    AccountService,
    InstructionService,
    IngredientService,
    RatingService,
    CategoryService,
    FilterService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
