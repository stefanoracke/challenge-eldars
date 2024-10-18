import { Component, inject, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostI } from '../../models/post.interface';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [TableModule, Button, CommonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  apiService = inject(ApiService)
  authService = inject(AuthService)
  posts$!: Observable<PostI[]>
  isAdmin!:boolean
  ngOnInit() {
    this.isAdmin = this.authService.isAdmin()
    this.posts$  =this.apiService.getData("posts")
  }
}
