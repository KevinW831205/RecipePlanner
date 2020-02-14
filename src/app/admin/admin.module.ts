import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoryTagsPageComponent } from './components/category-tags-page/category-tags-page.component';
import { AdminGuard } from './services/admin-guard.service';



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
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AccountsComponent,
    CategoryTagsPageComponent,
  ]
})
export class AdminModule { }
