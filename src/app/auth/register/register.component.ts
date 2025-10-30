import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({ selector: 'app-register', templateUrl: './register.component.html' })
export class RegisterComponent {
  u=''; p=''; nome='';
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    try { this.auth.register({username:this.u,password:this.p,nome:this.nome}); alert('Conta criada!'); this.router.navigate(['/login']); }
    catch(e){ alert(e.message); }
  }
}
