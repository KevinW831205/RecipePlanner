import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { CategoryTagsPageComponent } from './admin/category-tags-page/category-tags-page.component';

const routes: Routes = [

  { path: 'recipes', component: RecipePageComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'recipe/:id', component: RecipeDetailPageComponent },
  { path: 'admin/category-tags', component: CategoryTagsPageComponent },
  // { path:'', component: },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
