export class Paginate<T> {
  constructor(
    public data: T[] = [],
    public count: number = 0,
  ) { }
}

export class Pagination {
  currentPage: number;
  totalPage: number;
  limit: number;
  constructor(
    currentPage: number = 1,
    totalPage: number = 1,
    limit: number = 10
  ) {
    this.currentPage = currentPage;
    this.totalPage = totalPage;
    this.limit = limit;
  }
}
