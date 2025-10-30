import { Observable } from 'rxjs';

export interface TableColumn<T = any> {
  key: string;                // propriedade do item
  header: string;             // título da coluna
  width?: string;
  type?: 'text'|'date'|'chip'|'badge';
  format?: string;            // p/ date: 'dd/MM/yyyy HH:mm'
  cell?(row: T): any;         // função p/ render custom
}

export interface Sort {
  active: string;
  direction: 'asc' | 'desc' | '';
}

export interface PageEvent {
  pageIndex: number;
  pageSize: number;
}

export interface PagedResult<T> {
  items: T[];
  total: number;
}

export type DataProvider<T, F = any> =
  (page: number, size: number, filters?: F, sort?: Sort) => Observable<PagedResult<T>>;
