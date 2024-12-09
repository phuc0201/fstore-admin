import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    data: { breadcrumb: '' }
  }
];

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountPageModule { }
