import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }

    this.loading = true;
    const { nome, username, password } = this.form.value;

    try {
      this.auth.register({ username, password, nome });
      alert('Conta criada!');
      this.router.navigate(['/login']);
    } catch (e) {
      // ATENÇÃO: sem ": any" aqui
      const msg = (e && (e as any).message) ? (e as any).message : 'Erro ao criar conta.';
      alert(msg);
    } finally {
      this.loading = false;
    }
  }

  get f() {
    return this.form.controls;
  }
}
