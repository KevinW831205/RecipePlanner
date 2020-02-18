import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditRecipePageComponent } from './components/edit-recipe-page/edit-recipe-page.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { NewRecipeBtnComponent } from './components/new-recipe-btn/new-recipe-btn.component';
import { NewRecipeFormComponent } from './components/new-recipe-form/new-recipe-form.component';
import { NewRecipeModalComponent } from './components/new-recipe-modal/new-recipe-modal.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SummaryPipe } from './components/recipe-card/summary.pipe';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeStarRatingComponent } from './components/recipe-star-rating/recipe-star-rating.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthorMediaComponent } from './components/author-media/author-media.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NewRecipeBtnComponent,
    NewRecipeModalComponent,
    EditRecipePageComponent,
    NewRecipeFormComponent,
    RecipeDetailPageComponent,
    RecipeCardComponent,
    RecipeStarRatingComponent,
    RecipePageComponent,
    InstructionsComponent,
    IngredientsComponent,
    MyRecipesComponent,
    SummaryPipe,
    AuthorMediaComponent
  ],
  entryComponents: [
    NewRecipeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule

  ],
  exports: [
    NewRecipeBtnComponent,
    NewRecipeModalComponent,
    EditRecipePageComponent,
    NewRecipeFormComponent,
    RecipeDetailPageComponent,
    RecipeCardComponent,
    RecipeStarRatingComponent,
    RecipePageComponent,
    InstructionsComponent,
    IngredientsComponent,
    MyRecipesComponent,
    SummaryPipe,
    AuthorMediaComponent,

  ]
})
export class RecipeModule { }
