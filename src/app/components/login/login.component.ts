import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/Session/session.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

constructor(){}
  // constructor(private session: SessionService, private router: Router) { 
  //   if (this.session.get() !== ''){
  //     this.router.navigateByUrl('/spottingstats');
  //   }
  // }

  ngOnInit(): void {
  }

  // onLoginClicked() {
  //   this.session.save('abcdefg');
  //   this.router.navigateByUrl('/spottingstats');
  // }
}
