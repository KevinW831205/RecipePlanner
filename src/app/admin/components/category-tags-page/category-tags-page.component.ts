import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-tags-page',
  templateUrl: './category-tags-page.component.html',
  styleUrls: ['./category-tags-page.component.css']
})
export class CategoryTagsPageComponent implements OnInit, OnDestroy {

  categoryInput: string;
  categories: Category[];
  categorySubscription: Subscription;

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categorySubscription = this.categoryService.getAll().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

  createCategory() {
    let newCategory = new Category({ name: this.categoryInput })
    this.categoryService.create(newCategory).pipe(
      take(1)
    ).subscribe(
      res => {
        res.recipes = [];
        this.categories.push(res);
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category.id).pipe(
      take(1)
    ).subscribe(
      res => {
        let index = null;
        for (let i = 0; i < this.categories.length; i++) {
          if (this.categories[i].name == res.name) {
            index = i;
          }
        }
        if (index) {
          this.categories.splice(index, 1);
        }
      },
      err => {

      }
    )

  }

}
