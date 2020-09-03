import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  uri: string = 'https://pokeapi.co/api/v2/pokemon';
  all: string = '?limit=150&offset=200';

  constructor(private http: HttpClient) { }

  getPokemons(): Promise<any> {
    return this.http.get(this.uri + this.all).toPromise();
  }

  getPokemon(id): Promise<any> {
    return this.http.get(this.uri + id).toPromise();
  }

}
