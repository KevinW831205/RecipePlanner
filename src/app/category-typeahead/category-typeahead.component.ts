import { Component, OnInit, OnDestroy, ViewChild, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { } from 'events';

@Component({
  selector: 'app-category-typeahead',
  templateUrl: './category-typeahead.component.html',
  styleUrls: ['./category-typeahead.component.css']
})
export class CategoryTypeaheadComponent implements OnInit, OnDestroy {

  @Output('categoryEmitter') categoryEmitter = new EventEmitter<Category>();

  categories: Category[];
  categorySubscription: Subscription;

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  filterCategory: Category;



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

  search = (text$: Observable<string>) => {

    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));

    const inputFocus$ = this.focus$;
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '') ? this.categories
        : this.categories.filter(c => c.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    );
  }

  addCategory(tooltip) {

    if (this.filterCategory) {
      this.categoryEmitter.emit(this.filterCategory)
      return
    }

    tooltip.open();
    setTimeout(() => { tooltip.close() }, 2000)

  }


}
