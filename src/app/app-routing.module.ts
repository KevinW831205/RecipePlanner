import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './admin/components/accounts/accounts.component';
import { CategoryTagsPageComponent } from './admin/components/category-tags-page/category-tags-page.component';
import { AdminGuard } from './admin/services/admin-guard.service';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [

  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'recipes', component: RecipePageComponent },
  { path: 'my/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'my/recipes', component: MyRecipesComponent, canActivate: [AuthGuard] },
  { path: 'recipe/edit/:id', component: EditRecipePageComponent, canActivate: [AuthGuard] },
  { path: 'recipe/:id', component: RecipeDetailPageComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'admin/category', component: CategoryTagsPageComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/accounts', component: AccountsComponent, canActivate: [AuthGuard, AdminGuard] },
  // { path:'', component: },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
