import { Injectable } from '@angular/core';
import { UserI } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  users:UserI[] = [
    {
      email: "admin@example.com",
      password: "example123",
      role: "admin",
      token:"tokenprueba"
    },
    {
      email: "user@example.com",
      password: "example123",
      role: "user",
      token:"tokenprueba"
    },
  ]


  authenticate(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user ? { success: true, role: user.role, token: user.token } : { success: false };
  }
}
