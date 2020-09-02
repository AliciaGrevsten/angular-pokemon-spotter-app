import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';


@Component({
  selector: 'app-unseen-pokemons',
  templateUrl: './unseen-pokemons.component.html',
  styleUrls: ['./unseen-pokemons.component.scss']
})
export class UnseenPokemonsComponent implements OnInit {
  unseenPokemons:string[];

  constructor() { }

  ngOnInit(): void {
    this.unseenPokemons = ['Mew', 'Ivysaur', 'Zaptos', 'Articuno']
  }
}
