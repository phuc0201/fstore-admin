export class Paginate<T> {
  constructor(
    public currentPage = 1,
    public totalPage = 10,
    public totalItem = 0,
    public limit = 10,
    public data: T[] = [],
  ) { }
}
