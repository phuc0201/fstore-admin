import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { config } from 'src/config/local.config';
import { ProductDTO } from "../models/product/product.dto";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = `${config.apiUrl}/products`;

  constructor(
    private http: HttpClient,
  ) { }

  createProduct(dto: ProductDTO): Observable<any> {
    return this.http.post<ProductDTO>(`${this.baseUrl}`, dto);
  }

  getProducts(page: number = 1, skip: number = 0): Observable<any> {
    return this.http.get<ProductDTO>(this.baseUrl + `?page=${page}&skip=${skip}`);
  }

  getProduct(productId: number): Observable<any> {
    return this.http.get('http://47.129.207.13:3000/products/' + productId);
  }

  updatePhoto(variantId: number, photo: FormData): Observable<any> {
    return this.http.patch(this.baseUrl + '/variant/' + variantId + '/photos', photo);
  }
}
