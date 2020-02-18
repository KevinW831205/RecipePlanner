import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoryTagsPageComponent } from './components/category-tags-page/category-tags-page.component';
import { AdminGuard } from './services/admin-guard.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccountsComponent,
    CategoryTagsPageComponent,
  ],
  providers: [
    AdminGuard
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountsComponent,
    CategoryTagsPageComponent,
  ]
})
export class AdminModule { }
