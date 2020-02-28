import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {

  hasError: boolean = false;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.getHasError$().subscribe(
      res => {
        this.hasError = res;
      }
    )
  }

}
