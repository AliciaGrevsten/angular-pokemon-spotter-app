import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-pokemon',
  templateUrl: './register-pokemon.component.html',
  styleUrls: ['./register-pokemon.component.scss'],
  
})
export class RegisterPokemonComponent implements OnInit {
  zoom: number = 8;
  private event: MouseEvent;
  
  lat: number = 59.334591;
  lng: number = 18.063240;
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
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 59.334591,
		  lng: 18.063240,
		  draggable: true
	  }
  ]
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
  
  

