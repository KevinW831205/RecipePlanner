import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../models/Category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {

  categories$: Observable<Category[]>;
  currentCategory = "All";
  @Output('emitSelected') emitSelected = new EventEmitter<string>()

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }

  setCurrentCategory(val: string) {
    this.currentCategory = val;
    this.emitSelected.emit(val);
  }



}
