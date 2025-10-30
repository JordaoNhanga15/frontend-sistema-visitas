import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownOption } from '../app-dropdown/app-dropdown.component';

export interface FilterField {
  key: string;
  label: string;
  type: 'text'|'select'|'date';
  options?: DropdownOption[];
  placeholder?: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})
export class AppFiltersComponent implements OnInit {
  @Input() fields: FilterField[] = [];
  @Input() initial: any = {};
  @Output() apply = new EventEmitter<any>();
  @Output() reset = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const group: any = {};
    this.fields.forEach(f => group[f.key] = [this.initial[f.key] || null]);
    this.form = this.fb.group(group);
  }

  onApply() { this.apply.emit(this.form.value); }
  onReset() { this.form.reset(); this.reset.emit(); }
}
