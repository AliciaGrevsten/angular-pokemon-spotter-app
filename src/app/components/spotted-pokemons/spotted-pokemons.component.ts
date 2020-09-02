import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-spotted-pokemons',
  templateUrl: './spotted-pokemons.component.html',
  styleUrls: ['./spotted-pokemons.component.scss']
})
export class SpottedPokemonsComponent implements OnInit {
  spottedPokemons:Pokemon[];

  constructor() { }

  ngOnInit(): void {
    this.spottedPokemons = [
      {
        id: 1,
        type: 'Pikachu',
        gender: 'male',
        shiny: false,
        location: 'the forest',
        dateTime: Date.now()
      },
      {
        id: 1,
        type: 'Togepi',
        gender: 'female',
        shiny: false,
        location: 'With the excute eggs',
        dateTime: Date.now()
      },
      {
        id: 1,
        type: 'Lugia',
        gender: 'male',
        shiny: false,
        location: 'That is a secret...',
        dateTime: Date.now()
      },
      {
        id: 1,
        type: 'Bulbasaur',
        gender: 'male',
        shiny: false,
        location: 'Protecting the orphane pokemons',
        dateTime: Date.now()
      }
    ]
  }

}
