import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Paginate, Pagination } from 'src/app/core/models/common/paginate.model';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Paginate<Product> = {
    data: [],
    count: 1
  };
  isLoading: boolean = true;
  paginate: Pagination = new Pagination();

  constructor(
    private productSrv: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productSrv.getProducts()
      .pipe(tap(() => { this.isLoading = true; }))
      .subscribe({
        next: (response: Paginate<Product>) => {
          this.products = response;
          this.paginate = new Pagination(this.paginate.currentPage, Math.ceil(response.count / this.paginate.limit), this.paginate.limit);
        },
        complete: () => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      });
  }
}
