import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductDTO } from "../models/product/product.model";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
  ) { }

  createProduct(dto: ProductDTO): Observable<any> {
    return this.http.post<ProductDTO>('http://47.129.207.13:3000/products', dto);
  }
}
