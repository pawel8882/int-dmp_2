import { Category } from 'src/app/_class/Messeges/Category';

export interface PaginatorFilterClass {

  search: string;
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;

  categories: Category[];

}
