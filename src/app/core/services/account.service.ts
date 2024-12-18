import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "src/config/local.config";
import { User } from "../models/account/user.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = `${config.apiUrl}/users`;

  constructor(
    private http: HttpClient
  ) { }

  getAccounts(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

}
