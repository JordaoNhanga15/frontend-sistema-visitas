import { Component, EventEmitter, Input, Output } from '@angular/core';
import { exportToCsv } from '@app/shared/utils/csv-export.util';

@Component({
  selector: 'app-export',
  templateUrl: './app-export.component.html'
})
export class AppExportComponent {
  @Input() data: any[] = [];
  @Input() filename = 'export.csv';
  @Output() pdf = new EventEmitter<void>(); // para integrares jsPDF depois

  exportCsv() { exportToCsv(this.filename, this.data); }
}
