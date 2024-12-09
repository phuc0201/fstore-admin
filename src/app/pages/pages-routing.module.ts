import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule),
        title: 'Dashboard',
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'products',
        loadChildren: () => import('./products-page/products-page.module').then(m => m.ProductsPageModule),
        title: 'Products',
        data: { breadcrumb: 'Products' },
      },
      {
        path: 'category',
        loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule),
        title: 'Category',
        data: { breadcrumb: 'Category' },
      },
      {
        path: 'account',
        loadChildren: () => import('./account-page/account-page.module').then(m => m.AccountPageModule),
        title: 'Account',
        data: { breadcrumb: 'Account' },
      },
      {
        path: 'order',
        loadChildren: () => import('./order-page/order-page.module').then(m => m.OrderPageModule),
        title: 'Order',
        data: { breadcrumb: 'Order' },
      },
      {
        path: 'manage-review',
        loadChildren: () => import('./manage-review-page/manage-review-page.module').then(m => m.ManageReviewPageModule),
        title: 'Review',
        data: { breadcrumb: 'Review' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
