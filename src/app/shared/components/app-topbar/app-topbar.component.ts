import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent {
  @Output() menu = new EventEmitter<void>();

  userName = 'JORDÃO OLIVEIRA';
  notif = 1;

  onLogout() {
    // aqui podes chamar o AuthService
    localStorage.removeItem('token');
  }
}
