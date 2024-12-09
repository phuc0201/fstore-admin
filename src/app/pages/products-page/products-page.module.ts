import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const plugins = [
  PaginationComponent
];

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { breadcrumb: '' },
  },
  {
    path: 'details',
    component: ProductDetailsComponent,
    data: { breadcrumb: 'Product details' },
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    plugins
  ]
})
export class ProductsPageModule { }
