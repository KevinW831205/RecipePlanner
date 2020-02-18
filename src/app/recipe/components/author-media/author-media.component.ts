import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../shared/models/Account';

@Component({
  selector: 'app-author-media',
  templateUrl: './author-media.component.html',
  styleUrls: ['./author-media.component.css']
})
export class AuthorMediaComponent {
  @Input('account') account: Account;

  constructor() { }


}
