import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { Subscription, Observable } from 'rxjs';

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
    this.categoryService.create(newCategory).subscribe(
      res => {
        res.recipes = [];
        this.categories.push(res);
      },
      err => {
        console.log(err)
      }
    )
  }

  // deleteCategory(category: Category){
  // }

}
