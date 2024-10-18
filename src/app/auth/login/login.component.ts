import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FloatLabelModule, ReactiveFormsModule, Button],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  fb = inject(FormBuilder)
  usersService = inject(UsersService)
  authService = inject(AuthService)
  messageService = inject(MessageService)
  router = inject(Router)

  loginForm: FormGroup
  loginError!: string | null

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const result = this.usersService.authenticate(email, password);

      if (result.success) {
        // Almacenar el rol en una cookie
        if (result.role)
          this.authService.setUserRole(result.role);
        if (result.token)
          this.authService.setToken(result.token);
        this.authService.isAuthSignal.set(true);
        this.messageService.add({ severity: 'success', summary: 'Login exitoso', detail: '¡Bienvenido/a!' });
        this.loginError = null; // Limpiar cualquier error anterior
        this.router.navigate(['list'])
      } else {
        this.loginError = 'Credenciales incorrectas. Intenta de nuevo.';
      }
    }
  }

}
