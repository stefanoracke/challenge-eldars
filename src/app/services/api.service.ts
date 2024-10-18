import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; 
  http = inject(HttpClient)
  constructor() { }

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${endpoint}`);
  }

  
}
