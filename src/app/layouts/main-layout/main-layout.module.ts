import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { MainLayoutComponent } from './main-layout.component';


const plugins = [
  SidebarMenuComponent,
  BreadcrumbComponent
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    plugins
  ]
})
export class MainLayoutModule { }
