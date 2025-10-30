import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent {
  u = ''; p = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    try { this.auth.login(this.u, this.p); this.router.navigate(['/']); }
    catch(e){ alert(e.message); }
  }
}
