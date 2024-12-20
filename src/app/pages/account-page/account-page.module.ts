import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { ListAccountComponent } from './list-account/list-account.component';

const routes: Routes = [
  {
    path: '',
    component: ListAccountComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    ListAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationComponent
  ]
})
export class AccountPageModule { }
