import { Injectable, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from '@app/core/services/notification.service';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class WsService implements OnDestroy {
  private socket?: WebSocketSubject<any>;
  private destroy$ = new Subject<void>();

  constructor(private notifier: NotificationService) {}

  connect(path: string = ''): void {
    const url = `${environment.wsBaseUrl}${path}`;
    this.socket = webSocket(url);

    this.socket
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: msg => {
          // aqui podes enviar para um subject global
          // console.log('WS msg', msg);
        },
        error: err => {
          this.notifier.error('Ligação em tempo real perdida.');
        },
      });
  }

  send(data: any): void {
    if (this.socket) {
      this.socket.next(data);
    }
  }

  messages(): Observable<any> {
    if (!this.socket) {
      throw new Error('WebSocket não está ligado.');
    }
    return this.socket.asObservable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.socket) {
      this.socket.complete();
    }
  }
}
