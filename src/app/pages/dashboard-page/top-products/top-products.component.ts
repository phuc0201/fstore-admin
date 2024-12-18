import { Component, OnInit } from '@angular/core';
import { Paginate, Pagination } from 'src/app/core/models/common/paginate.model';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {
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
      .subscribe({
        next: (response: Paginate<Product>) => {

          this.products.data = response.data.length >= 10 ? response.data.slice(0, 10) : response.data;

          // this.paginate = new Pagination(this.paginate.currentPage, Math.ceil(response.count / this.paginate.limit), this.paginate.limit);
        },
        complete: () => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      });
  }
}
