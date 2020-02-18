import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { AccountService } from './services/account.service';
import { CategoryService } from './services/category.service';
import { ErrorService } from './services/error.service';
import { FilterService } from './services/filter.service';
import { IngredientService } from './services/ingredient.service';
import { InstructionService } from './services/instruction.service';
import { RatingService } from './services/rating.service';
import { RecipeService } from './services/recipe.service';



@NgModule({
  declarations: [
    ErrorAlertComponent
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
  imports: [
    CommonModule
  ],
  exports: [
    ErrorAlertComponent
  ]
})
export class SharedModule { }
