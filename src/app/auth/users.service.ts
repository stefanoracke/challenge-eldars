import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  users = [
    {
      email: "admin@example.com",
      password: "example123",
      role: "admin"
    },
    {
      email: "user@example.com",
      password: "example123",
      role: "user"
    },
  ]


  authenticate(email: string, password: string) {
    console.log(email, password)
    console.log(this.users)
    const user = this.users.find(u => u.email === email && u.password === password);
    console.log(user)
    return user ? { success: true, role: user.role } : { success: false };
  }
}
