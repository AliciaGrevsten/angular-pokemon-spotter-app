import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-pokemon',
  templateUrl: './register-pokemon.component.html',
  styleUrls: ['./register-pokemon.component.scss'],
  
})
export class RegisterPokemonComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  data:any = []
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getName()
  }

  getName() {
    const url ='https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/'
    this.http.get(url).pipe(
      map((data:any) => data.results)
    ).subscribe((res)=>{
      this.data = res
      console.log(this.data)
      })
  }
  
  
}
