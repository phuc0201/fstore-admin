export class Category {
  categoryId: number;
  categoryName: string;
  urlSlug: string;
  imgUrl: string;
  children?: Category[];
  parent?: Category;
  constructor(
    categoryId: number = 0,
    categoryName: string = '',
    urlSlug: string = '',
    imgUrl: string = '',
  ) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.urlSlug = urlSlug;
    this.imgUrl = imgUrl;
  }
}

export class CategoryDTO {
  categoryName: string;
  parent: number | null;

  constructor(
    categoryName: string = '',
    parent: number | null = null
  ) {
    this.categoryName = categoryName,
      this.parent = parent;
  }
}

