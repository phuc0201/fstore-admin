import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';


const routes: Routes = [
  {
    path: '',
    component: ListPromotionComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    ListPromotionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationComponent
  ]
})
export class PromotionPageModule { }
