import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoryDropdownComponent } from './components/category-dropdown/category-dropdown.component';
import { CategoryTypeaheadComponent } from './components/category-typeahead/category-typeahead.component';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { FiltererComponent } from './components/filterer/filterer.component';
import { AccountService } from './services/account.service';
import { CategoryService } from './services/category.service';
import { ErrorService } from './services/error.service';
import { FilterService } from './services/filter.service';
import { IngredientService } from './services/ingredient.service';
import { InstructionService } from './services/instruction.service';
import { RatingService } from './services/rating.service';
import { RecipeService } from './services/recipe.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ErrorAlertComponent,
    CategoryDropdownComponent,
    CategoryTypeaheadComponent,
    FiltererComponent,
  ],
  providers: [
    RecipeService,
    AccountService,
    InstructionService,
    IngredientService,
    RatingService,
    CategoryService,
    FilterService,
    ErrorService,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  exports: [
    ErrorAlertComponent,
    CategoryDropdownComponent,
    CategoryTypeaheadComponent,
    FiltererComponent,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule

  ]
})
export class SharedModule { }
