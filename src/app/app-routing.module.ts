import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { CategoryTagsPageComponent } from './admin/category-tags-page/category-tags-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { AdminGuard } from './services/admin-guard.service';

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
