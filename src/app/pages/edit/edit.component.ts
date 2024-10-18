import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormCreateComponent } from '../../components/form-create/form-create.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormCreateComponent, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit, OnDestroy {
  _routeSubscription!: Subscription
  route = inject(ActivatedRoute)
  apiService = inject(ApiService)
  post$!:Observable<any>
  id!: string | null


  ngOnInit() {
    // Obtener el parámetro de la ruta

    this._routeSubscription = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id)
      this.post$= this.apiService.getPostById(this.id)
    });
  }
  ngOnDestroy(): void {
    this._routeSubscription.unsubscribe()
  }
}
