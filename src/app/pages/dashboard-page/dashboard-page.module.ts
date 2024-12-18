import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardPageComponent } from './dashboard-page.component';
import { NewVisitorCardComponent } from './new-visitor-card/new-visitor-card.component';
import { UserActiveCardComponent } from './user-active-card/user-active-card.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { TopProductsComponent } from './top-products/top-products.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    DashboardPageComponent,
    NewVisitorCardComponent,
    UserActiveCardComponent,
    SalesOverviewComponent,
    TopProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    FormsModule
  ]
})
export class DashboardPageModule { }
