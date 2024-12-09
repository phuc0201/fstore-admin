import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrderPageComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderPageModule { }
