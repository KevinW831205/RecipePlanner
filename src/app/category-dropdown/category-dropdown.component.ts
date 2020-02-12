import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { FilterService } from '../services/filter.service';

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
