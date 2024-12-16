import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  isOpenForm: boolean = false;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.fetchCategory();
  }

  openCategoryForm(): void {
    this.isOpenForm = true;
  }

  fetchCategory(): void {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

  reloadData(isReload: boolean): void {
    if (isReload) {
      this.fetchCategory();
    }
  }
}
