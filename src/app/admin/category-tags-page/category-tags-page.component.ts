import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-category-tags-page',
  templateUrl: './category-tags-page.component.html',
  styleUrls: ['./category-tags-page.component.css']
})
export class CategoryTagsPageComponent implements OnInit {

  categoryInput: string;
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll()
  }

  createCategory() {
    let newCategory = new Category({ name: this.categoryInput })
    this.categoryService.create(newCategory).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
      }
    )
  }

}
