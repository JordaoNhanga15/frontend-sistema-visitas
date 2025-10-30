import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn, Sort } from '@app/shared/types/table.types';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent<T = any> {
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() clickable = false;
  @Output() rowClick = new EventEmitter<T>();
  @Output() sort = new EventEmitter<Sort>();

  active = '';
  direction: 'asc'|'desc'|'' = '';

  setSort(col: TableColumn) {
    if (!col.key) return;
    if (this.active !== col.key) { this.active = col.key; this.direction = 'asc'; }
    else if (this.direction === 'asc') this.direction = 'desc';
    else this.direction = '';
    this.sort.emit({ active: this.active, direction: this.direction });
  }
}
