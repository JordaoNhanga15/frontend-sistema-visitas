import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  @Input() label = 'Salvar';
  @Input() icon = '';                  // nome do material icon
  @Input() color: 'primary'|'accent'|'warn'|undefined = 'primary';
  @Input() type: 'button'|'submit' = 'button';
  @Input() disabled = false;
  @Input() flat = false;               // true => mat-flat-button
}
