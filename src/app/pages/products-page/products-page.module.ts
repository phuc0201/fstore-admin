import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';
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
  },
  {
    path: 'new',
    component: FormAddProductComponent,
    data: { breadcrumb: 'New' },
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    FormAddProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    plugins,
    ReactiveFormsModule,
    ColorPickerModule,
    FormsModule
  ]
})
export class ProductsPageModule { }
