import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { Account } from '../shared/models/Account';
import { Recipe } from '../shared/models/Recipe';
import { AuthService } from '../shared/services/auth.service';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit, OnDestroy {

  user: Account;
  subscription: Subscription;
  error: boolean = false;

  constructor(private authService: AuthService, private recipeService: RecipeService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(recipeForm) {

    let recipe = new Recipe(recipeForm);
    recipe.name = recipe.name.trim();
    recipe.description = recipe.description.trim();
    recipe.account = new Account({ id: this.user.id });
    this.recipeService.create(recipe).subscribe(
      res => {
        this.activeModal.close('success')
        this.router.navigate(['recipe/edit', res.id], { queryParams: { user: this.user.username } })
      }, err => {
        this.error = true;
        console.log(err);
      }
    )
  }

}
