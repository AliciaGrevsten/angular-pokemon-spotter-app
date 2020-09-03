import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { SessionService } from 'src/app/services/Session/session.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-spotted-pokemons',
  templateUrl: './spotted-pokemons.component.html',
  styleUrls: ['./spotted-pokemons.component.scss']
})
export class SpottedPokemonsComponent implements OnInit {
  spottedPokemons:Pokemon[];

  constructor(private session: SessionService) { 
    if(this.session.get() !== '') {
      
    }
  }

  ngOnInit(): void {
    /* this.spottedPokemons = [
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
    ] */
  }

}
