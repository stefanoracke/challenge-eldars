import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MenubarModule, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;

    authService = inject(AuthService)
    constructor(private router: Router) { }

    logout(){
        this.authService.logout()
        this.router.navigate(['/login'])
    }

    ngOnInit() {
        this.items = [
            {
                label: 'List',
                command: () => {
                    this.router.navigate(['/list']);
                }
            },
            {
                label: 'Cards lists',
                command: () => {
                    this.router.navigate(['/card-list']);
                }
            },
        ];
    }
}
