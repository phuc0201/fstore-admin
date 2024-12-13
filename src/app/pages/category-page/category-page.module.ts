import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { FormNewCategoryComponent } from './form-new-category/form-new-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const plugins = [
  PaginationComponent
];

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
    data: { breadcrumb: '' }
  },
  {
    path: 'new',
    component: FormNewCategoryComponent,
    data: { breadcrumb: 'New' }
  }
];

@NgModule({
  declarations: [
    FormNewCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    plugins
  ]
})
export class CategoryPageModule { }
