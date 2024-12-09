import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';

const plugins = [
  CommonModule,
  RouterModule
];

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: plugins
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string; }> = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((value) => {
      this.breadcrumbs = value;
    });
  }
}
