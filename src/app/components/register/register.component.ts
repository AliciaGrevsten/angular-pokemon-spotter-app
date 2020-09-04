import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/Session/session.service'
import { UserService } from '../../services/User/user.service'
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  	//properties and stuff
	username:string
	password:string
  	constructor(private http: HttpClient) { }
 	ngOnInit() {
	  	if(location.hash) {
	  		let fragment = new URLSearchParams(location.hash.substring(1));
	  		console.log(fragment.get("access_token"));
	  		const userinfo = fetch('https://gitlab.com/api/v4/user', {
	  			headers: {
	  				'Authorization': `Bearer ${fragment.get("access_token")}`,
	  			},})
	  			.then(data => data.json())	
	  			.then(json => {console.log(json.username); return json})
	  			.then(json => this.username = json.username)
	  	}
 	}
	gettoken() {
		const config = {
		redirect_uri: '<your redirect link here>',
		client_id: '<your app id here>',
		scope: 'read_user openid profile email',
		response_type: 'token'
		}
		location.href = `https://gitlab.com/oauth/authorize?${new URLSearchParams(config).toString()}`;
	}

}
