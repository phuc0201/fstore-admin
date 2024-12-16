import { PromotionType } from "../enums";

export interface Promotion {
  promotionId: number;
  promotionSlug: string;
  promotionName: string;
  promotionImage: string;
  promotionDescription: string;
  promotionStartDate: Date;
  promotionEndDate: Date;
  promotionStatus: boolean;
  promotionType: PromotionType;
  products: number[];
  promotionValue: number;
  promotionMaxValue: number;
}
