import { Component, OnInit } from '@angular/core';
import { HttpErrorHandlerService } from '../services/http-error-handler.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {

  hasError: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
