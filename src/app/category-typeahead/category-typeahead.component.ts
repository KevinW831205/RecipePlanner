import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-typeahead',
  templateUrl: './category-typeahead.component.html',
  styleUrls: ['./category-typeahead.component.css']
})
export class CategoryTypeaheadComponent implements OnInit, OnDestroy {

  categories: Category[];
  categorySubscription: Subscription;

  constructor(private categoryService: CategoryService) { }

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

  formatter = (category: Category) => category.name;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.categories.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )


}
