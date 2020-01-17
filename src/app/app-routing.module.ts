import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

const routes: Routes = [

  { path: 'recipes', component: RecipePageComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
