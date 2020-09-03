import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  save(user: User) {
    localStorage.setItem('users', JSON.stringify(user));
  }

  get() {
    return localStorage.getItem('users') || '';
  }
}
