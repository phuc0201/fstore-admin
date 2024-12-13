import { Component } from '@angular/core';
import { PromotionData } from 'src/app/core/dummy-data/promotion.data';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.scss']
})
export class ListPromotionComponent {
  promotions = PromotionData;
}
