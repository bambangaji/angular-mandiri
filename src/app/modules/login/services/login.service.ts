import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: any[] = [];

  constructor() { }

  addUser(user: any): void {
    this.users.push(user);
    console.log('User registered:', user);
  }

  getUsers(): any[] {
    return this.users;
  }
}
