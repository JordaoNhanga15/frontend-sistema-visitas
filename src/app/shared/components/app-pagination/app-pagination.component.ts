import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@app/shared/types/table.types';

@Component({
  selector: 'app-pagination',
  templateUrl: './app-pagination.component.html',
  styleUrls: ['./app-pagination.component.scss']
})
export class AppPaginationComponent {
  @Input() pageIndex = 0;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Input() pageSizeOptions = [5, 10, 25, 50];

  @Output() change = new EventEmitter<PageEvent>();

  get pages(): number {
    return this.total ? Math.ceil(this.total / this.pageSize) : 1;
  }

  go(i: number) {
    if (i < 0 || i >= this.pages) return;
    this.pageIndex = i;
    this.emit();
  }

  setSize(s: number) {
    this.pageSize = +s;
    this.pageIndex = 0;
    this.emit();
  }

  private emit() {
    this.change.emit({ pageIndex: this.pageIndex, pageSize: this.pageSize });
  }
}
