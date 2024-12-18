import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/account/user.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
  accounts: User[] = [];

  constructor(
    private accSrv: AccountService
  ) { }

  ngOnInit(): void {
    this.accSrv.getAccounts().subscribe({
      next: (res) => {
        this.accounts = res;
      }
    });
  }
}
