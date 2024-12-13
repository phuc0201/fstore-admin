import { Component } from '@angular/core';
import { AccountData } from 'src/app/core/dummy-data/account.data';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent {
  accounts = AccountData;
}
