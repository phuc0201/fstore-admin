import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "src/config/local.config";
import { Category, CategoryDTO } from "../models/category/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = `${config.apiUrl}/categories`;

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createCategory(data: CategoryDTO): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, data);
  }
}
