import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownOption { label: string; value: any; }

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html'
})
export class AppDropdownComponent {
  @Input() label = '';
  @Input() placeholder = 'Selecione...';
  @Input() options: DropdownOption[] = [];
  @Input() value: any = null;
  @Input() clearable = true;
  @Output() valueChange = new EventEmitter<any>();
}
