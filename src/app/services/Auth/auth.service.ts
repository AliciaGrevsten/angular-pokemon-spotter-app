import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth_config = {
    redirect_uri: "http://localhost:4200/spottingrankings", // change this 
    client_id: "20d01be566e61737e0d07ac0ae50dfdb30f2f4d6853a8423a44436d5365d0b16",
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
