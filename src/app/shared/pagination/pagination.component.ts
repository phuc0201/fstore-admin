import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Paginate } from 'src/app/core/models/common/paginate.model';

const plugins = [
  CommonModule
];

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: plugins
})
export class PaginationComponent implements OnInit {
  @Input() paginate = new Paginate<any>();
  listOfButton: number[] = [];
  numberPageStart: number = 1;

  private readonly PAGE_BUTTON_COUNT = 5;

  ngOnInit(): void {
    this.updateListOfButtons();
  }

  setActive(index: number): void {
    if (index < 1 || index > this.paginate.totalPage)
      return;

    this.paginate.currentPage = index;
    this.adjustButtonRange();
  }

  handleNextButton(): void {
    if (this.paginate.currentPage < this.paginate.totalPage) {
      this.paginate.currentPage++;
      this.adjustButtonRange();
    }
  }

  handlePrevButton(): void {
    if (this.paginate.currentPage > 1) {
      this.paginate.currentPage--;
      this.adjustButtonRange();
    }
  }

  adjustButtonRange(): void {
    const maxPage = this.paginate.totalPage;

    if (this.paginate.currentPage === this.numberPageStart + this.PAGE_BUTTON_COUNT - 1
      && this.paginate.currentPage < maxPage) {
      this.numberPageStart++;
    }

    if (this.paginate.currentPage === this.numberPageStart && this.numberPageStart > 1)
      this.numberPageStart--;

    this.updateListOfButtons();
  }

  updateListOfButtons(): void {
    const maxPage = this.paginate.totalPage;
    this.listOfButton = Array.from(
      { length: Math.min(this.PAGE_BUTTON_COUNT, maxPage - this.numberPageStart + 1) },
      (_, i) => this.numberPageStart + i
    );
  }
}
