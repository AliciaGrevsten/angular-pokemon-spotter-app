import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/Session/session.service'
import { UserService } from '../../services/User/user.service'
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User = {
    id: 1,
    username: 'aquelin',
    password: '123456',
    email: 'aquelin@tired.com',
    spottedPokemons: [
      {
        id: 1,
        pokemon: 'Pikachu',
        type: 'Electric',
        gender: 'male',
        shiny: false,
        location: 'the forest',
        dateTime: Date.now()
      },
      {
        id: 1,
        pokemon: 'Togepi',
        type: '',
        gender: 'female',
        shiny: false,
        location: 'With the excute eggs',
        dateTime: Date.now()
      },
      {
        id: 1,
        pokemon: 'Lugia',
        type: '',
        gender: 'male',
        shiny: false,
        location: 'That is a secret...',
        dateTime: Date.now()
      },
      {
        id: 1,
        pokemon: 'Bulbasaur',
        type: 'Grass',
        gender: 'male',
        shiny: false,
        location: 'Protecting the orphane pokemons',
        dateTime: Date.now()
      }
    ]
  };

  constructor(private session: SessionService, private router: Router, private userService: UserService) { 
    if (this.session.get() !== ''){
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    this.userService.save(this.user);
    this.session.save('abcdefg');
    this.router.navigateByUrl('/login');
  }

}
