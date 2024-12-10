export class ProductDTO {
  productName: string;
  description: string;
  price: number;
  variants: ProductVariantDTO[];
  categoryId: number;

  constructor(
    productName: string = '',
    description: string = '',
    price: number = 0,
    variants: ProductVariantDTO[] = [],
    categoryId: number = 1
  ) {
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.variants = variants;
    this.categoryId = categoryId;
  }
}


export class ProductVariantDTO {
  variantColor: string;
  variantHex: string;
  listSize: [number];

  constructor(
    variantColor: string = '',
    variantHex: string = '',
    listSize: [number] = [0]
  ) {
    this.variantColor = variantColor;
    this.variantHex = variantHex;
    this.listSize = listSize;
  }
}
