import { Pokemon } from './Pokemon';

export interface User {
    id:number;
    username:string;
    password:string;
    email:string;
    spottedPokemons:Array<Pokemon>;
}