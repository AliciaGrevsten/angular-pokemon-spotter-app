import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth_config = {
    redirect_uri: "http://localhost:4200/spottingstats", // change this 
    client_id: "37366e1f3ec6bb3cf2c651a6bd6e08682ec35f9054bf272232f6f8c45c6fda51",
    scope: "read_user openid profile email",
    response_type: "token",
  };

  constructor(private http: HttpClient) { }

  public login(): Observable<any> {
    console.log('In login method!');
    return this.http.get(`https://gitlab.com/oauth/authorize?${new URLSearchParams(this.auth_config)}`);
  }

  public logout(user: User) {
    //user.loggedIn = false;
  }
    
}
