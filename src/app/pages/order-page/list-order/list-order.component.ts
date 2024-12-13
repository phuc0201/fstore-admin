import { Component } from '@angular/core';
import { OrderData } from 'src/app/core/dummy-data/order.data';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent {
  orders = OrderData;
}
