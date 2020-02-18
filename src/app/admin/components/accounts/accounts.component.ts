import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts$: Observable<Account[]>

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts$ = this.accountService.getAllAccount();
  }

}
