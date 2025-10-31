import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private defaultDuration = 4000;

  constructor(private snack: MatSnackBar) {}

  success(message: string, action = 'OK'): void {
    this.snack.open(message, action, {
      duration: this.defaultDuration,
      panelClass: ['snack-success'],
    });
  }

  error(message: string, action = 'Fechar'): void {
    this.snack.open(message, action, {
      duration: this.defaultDuration,
      panelClass: ['snack-error'],
    });
  }

  info(message: string, action = 'OK'): void {
    this.snack.open(message, action, {
      duration: this.defaultDuration,
      panelClass: ['snack-info'],
    });
  }
}
