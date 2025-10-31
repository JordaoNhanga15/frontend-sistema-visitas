// src/app/shared/components/app-topbar/app-topbar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss'],
})
export class AppTopbarComponent implements OnInit {
  @Output() menu = new EventEmitter<void>();

  userName = 'JORDÃO OLIVEIRA';
  notif = 1;
  isAuthenticated = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigate(['/auth/login']);
  }

  goLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  goRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
