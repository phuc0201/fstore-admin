import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  products = [
    {
      id: 1,
      image: 'https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-02.jpg',
      name: 'Áo khoác nam',
      price: '100.000 đ',
      quantity: 1,
      total: '100.000 đ'
    },
    {
      id: 2,
      image: 'https://m.yodycdn.com/products/ao-khoac-gio-nam-the-thao-yody-SKM7005-DEN-1.JPG',
      name: 'Áo khoác gió nam',
      price: '100.000 đ',
      quantity: 1,
      total: '100.000 đ'
    },
    {
      id: 3,
      image: 'https://m.yodycdn.com/products/quan-jeans-nu-yody-BLN7016-TRA, QJN7062-XAH (4).jpg',
      name: 'Quần jean nữ',
      price: '100.000 đ',
      quantity: 1,
      total: '100.000 đ'
    }
  ];
}
