import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageReviewPageComponent } from './manage-review-page.component';


const routes: Routes = [
  {
    path: '',
    component: ManageReviewPageComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    ManageReviewPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageReviewPageModule { }
