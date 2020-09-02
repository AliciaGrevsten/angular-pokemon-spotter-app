import { Component, OnInit } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-best-players',
  templateUrl: './best-players.component.html',
  styleUrls: ['./best-players.component.scss']
})
export class BestPlayersComponent implements OnInit {
players : any;
  constructor() {
   this.players=[
     {
       id:1,
       name:'player one',
       spottingsRanknings:2

     },
     {
      id:2,
      name:'player one',
      spottingsRanknings: 100

    },
    {
      id:3,
      name:'player one',
      spottingsRanknings:99

    },
    {
      id:4,
      name:'player one',
      spottingsRanknings:78

    },
    {
      id:5,
      name:'player one',
      spottingsRanknings:56

    },
    {
      id:6,
      name:'player one',
      spottingsRanknings:345

    },
    {
      id:7,
      name:'player one',
      spottingsRanknings:90

    },
    {
      id:8,
      name:'player one',
      spottingsRanknings:4

    },
    {
      id:9,
      name:'player one',
      spottingsRanknings:9

    },
    {
      id:10,
      name:'player one',
      spottingsRanknings:29

    },
    {
      id:11,
      name:'player one',
      spottingsRanknings:47

    },
    {
      id:12,
      name:'player one',
      spottingsRanknings:78

    },
   ]
   }

  ngOnInit(): void {
   const arr = this.players.sort(this.sortTopTenPlayers);
   const newArr = arr.filter(rank => rank < 10);
  //  let arr = this.players.reduce(this.listTopTenPlayers);
    console.log(newArr);
  }

 sortTopTenPlayers(a,b){
   return b.spottingsRanknings - a.spottingsRanknings;
 
//  this.players.filter(this.players => this.players>= 7);
 }
// listTopTenPlayers(acc, val){
//   for(let i =0; i < 10; i++){
//     if(val.spottingsRanknings > acc.spottingsRanknings){
//       acc = val;
//     }
//   }
//   return acc;

// }
 
 

}
