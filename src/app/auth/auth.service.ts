import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
  nome?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private KEY = 'imob_users';

  private read(): User[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  }
  private write(list: User[]) {
    localStorage.setItem(this.KEY, JSON.stringify(list));
  }

  register(user: User) {
    const list = this.read();
    if (list.some(u => u.username === user.username))
      throw new Error('Utilizador já existe');
    list.push(user);
    this.write(list);
    return true;
  }

  login(username: string, password: string) {
    const ok = this.read().some(u => u.username === username && u.password === password);
    if (!ok) throw new Error('Credenciais inválidas');
    localStorage.setItem('token', btoa(username + ':' + Date.now()));
    return true;
  }

  logout() { localStorage.removeItem('token'); }
}
