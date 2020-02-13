import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Recipe } from '../models/Recipe';
import { Category } from '../models/Category';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {

  recipe: Recipe;
  authorized = false;
  recipeSubscription: Subscription;
  editName: boolean = false;
  editImage: boolean = false;
  editDescription: boolean = false;
  descriptionInput: string;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeSubscription = this.recipeService.get(recipeId).subscribe(
      recipe => {
        this.recipe = recipe;
        this.authService.checkUserPersist();
        this.authService.user$.subscribe(user => {
          if (user.username == this.recipe.account.username) {
            this.authorized = true;
          }
        })
      },
      err => {

      }
    )
  }

  saveRecipeName(nameInput) {
    this.recipeService.patchName(this.recipe.id, nameInput).subscribe(
      res => {
        this.recipe.name = res.name;
        this.toggleEditName();
      },
      err => {

      }
    )
  }

  togglePublished() {
    this.recipeService.patchTogglePublished(this.recipe.id).subscribe(
      res => {
        this.recipe.published = res.published;
      },
      err => {

      }
    )
  }

  deleteRecipe() {
    this.recipeService.delete(this.recipe.id).subscribe(
      res => {
        this.router.navigate(['/my/recipes'])
      },
      err => {

      }
    )
  }

  saveImageUrl(url: string) {
    this.recipeService.patchImageUrl(this.recipe.id, url).subscribe(
      res => {
        this.recipe.imageUrl = res.imageUrl;
      },
      err => {

      }
    )
  }

  saveDescription() {
    this.recipeService.patchDescription(this.recipe.id, this.descriptionInput).subscribe(
      res => {
        this.recipe.description = res.description;
        this.toggleEditDescription();
      },
      err => {

      }
    )
  }

  toggleEditName() {
    this.editName = !this.editName;
  }

  toggelEditImage() {
    this.editImage = !this.editImage;
  }

  toggleEditDescription() {
    this.editDescription = !this.editDescription;
  }

  populateDescription() {
    this.descriptionInput = this.recipe.description;
  }

  addCategory(category: Category) {
    this.recipeService.addTag(this.recipe.id, category.id).pipe(
      take(1)
    ).subscribe(
      res => {
        this.recipe.categoryTags = res.categoryTags;
      },
      err => {

      }
    )
  }

  removeTag(category: Category) {
    this.recipeService.deleteTag(this.recipe.id, category.id).pipe(
      take(1)
    ).subscribe(
      res => {
        this.recipe.categoryTags = res.categoryTags;
      }, err => {
        console.log(err)
      }
    )

  }


}
