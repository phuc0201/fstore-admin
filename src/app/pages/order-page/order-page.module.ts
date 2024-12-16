import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

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
    path: 'details',
    component: OrderDetailsComponent,
    data: { breadcrumb: 'Details' }
  }
];

@NgModule({
  declarations: [
    ListOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    plugins
  ]
})
export class OrderPageModule { }
