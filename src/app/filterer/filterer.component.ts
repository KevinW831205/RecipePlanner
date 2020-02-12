import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filterer',
  templateUrl: './filterer.component.html',
  styleUrls: ['./filterer.component.css']
})
export class FiltererComponent {

  constructor(private filterService: FilterService) { }

  filterByCategory(value) {
    this.filterService.setCategory(value);
  }

}
