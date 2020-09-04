import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service';
import { SessionService } from 'src/app/services/Session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentSession;
  buttonText = 'Login';

  constructor(private auth: AuthService, private session: SessionService) { 
    if (this.session.get() !== ''){
      this.currentSession = this.session;
      this.buttonText = 'Logout'
    } else {
      this.buttonText = 'Login'
    }
  }

  ngOnInit(): void {
  }

  onClicked() {
    if (this.buttonText == 'Login') {
      this.login();
    } else {
      this.logout();
    }
  }

  login() {
    console.log('Button Clicked!');
    this.auth.login().subscribe(data => { console.log(data) });
  }

  logout() {
    // remoce session
  }

}
