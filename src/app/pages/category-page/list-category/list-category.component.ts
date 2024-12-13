import { Component, OnInit } from '@angular/core';
import { CategoriesDummyData } from 'src/app/core/dummy-data/category.data';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  categories = CategoriesDummyData;

  ngOnInit(): void {

  }
}
