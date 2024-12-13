import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarMenu } from 'src/app/core/models/sidebar-menu/sidebar-menu.model';

const plugins = [
  CommonModule,
  RouterModule
];

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styles: ['.sidebar__menu-content .menu-sub .active { @apply bg-primary-hover text-primary; }'],
  standalone: true,
  imports: plugins
})
export class SidebarMenuComponent {
  menuList: SideBarMenu[] = [
    {
      id: 1,
      link: '/',
      icon: 'fa-solid fa-chart-pie',
      name: 'Dashboard',
    },
    {
      id: 2,
      link: 'products',
      icon: 'fa-solid fa-shirt',
      name: 'Products',
    },
    {
      id: 3,
      link: '/category',
      icon: 'fa-solid fa-layer-group',
      name: 'Category',
    },
    {
      id: 4,
      link: '/order',
      icon: 'fa-solid fa-box-open',
      name: 'Order',
    },
    {
      id: 5,
      link: '/account',
      icon: 'fa-solid fa-users',
      name: 'Account',
    },
    {
      id: 6,
      link: '/promotion',
      icon: 'fa-solid fa-percent',
      name: 'Promotion',
    },
  ];
}
