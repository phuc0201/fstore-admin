import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { FormNewOrderComponent } from './form-new-order/form-new-order.component';
import { ListOrderComponent } from './list-order/list-order.component';

const plugins = [
  PaginationComponent,
];

const routes: Routes = [
  {
    path: '',
    component: ListOrderComponent,
    data: { breadcrumb: '' }
  },
  {
    path: '',
    component: FormNewOrderComponent,
    data: { breadcrumb: 'New' }
  }
];

@NgModule({
  declarations: [
    ListOrderComponent,
    FormNewOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    plugins
  ]
})
export class OrderPageModule { }
