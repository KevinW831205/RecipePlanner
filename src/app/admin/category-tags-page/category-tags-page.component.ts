import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-tags-page',
  templateUrl: './category-tags-page.component.html',
  styleUrls: ['./category-tags-page.component.css']
})
export class CategoryTagsPageComponent implements OnInit {

  categoryInput: string;

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
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
