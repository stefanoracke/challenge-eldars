import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, NavbarComponent],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  authService = inject(AuthService)
  isAuth!:Signal<boolean>
  
  title = 'eldar';

  ngOnInit(): void {
    
  }
}
