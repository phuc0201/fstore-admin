import { Category } from "../category/category.model";

export class Product {
  productId: number;
  productName: string;
  urlSlug: string;
  description: string;
  sold: number;
  price: string;
  promotionPrice: number;
  variants: Variant[];
  category: Category;
  promotion: number;
  createdAt: string;
  updatedAt: string;

  constructor(
    productId: number,
    productName: string,
    urlSlug: string,
    description: string,
    sold: number,
    price: string,
    promotionPrice: number,
    variants: Variant[],
    category: Category,
    promotion: number,
    createdAt: string,
    updatedAt: string
  ) {
    this.productId = productId;
    this.productName = productName,
      this.urlSlug = urlSlug,
      this.description = description,
      this.sold = sold,
      this.price = price,
      this.promotionPrice = promotionPrice,
      this.variants = variants,
      this.category = category,
      this.promotion = promotion,
      this.createdAt = createdAt,
      this.updatedAt = updatedAt;
  }
}

export class Variant {
  variantId: number;
  variantColor: string;
  variantHex: string;
  sizeStockQuantity: SizeStockQuantity;

  constructor(
    variantId: number,
    variantColor: string,
    variantHex: string,
    sizeStockQuantity: SizeStockQuantity
  ) {
    this.variantId = variantId,
      this.variantColor = variantColor,
      this.variantHex = variantHex,
      this.sizeStockQuantity = sizeStockQuantity;
  }
}

export class SizeStockQuantity {
  id: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;

  constructor(
    id: number,
    s: number,
    m: number,
    l: number,
    xl: number,
    xxl: number
  ) {
    this.id = id;
    this.s = s;
    this.m = m;
    this.l = l;
    this.xl = xl;
    this.xxl = xxl;
  }
}
