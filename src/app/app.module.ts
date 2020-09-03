import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterPokemonComponent } from './components/register-pokemon/register-pokemon.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SpottedPokemonsComponent } from './components/spotted-pokemons/spotted-pokemons.component';
import { UnseenPokemonsComponent } from './components/unseen-pokemons/unseen-pokemons.component';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';
import { SpottingStatsComponent } from './pages/spotting-stats/spotting-stats.component';
import { LeastSpottedPokemonsComponent } from './components/least-spotted-pokemons/least-spotted-pokemons.component';
import { BestPlayersComponent } from './components/best-players/best-players.component';
import { OverallRankComponent } from './components/overall-rank/overall-rank.component';
import { SpottingRankingsComponent } from './pages/spotting-rankings/spotting-rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPokemonComponent,
    NavbarComponent,
    SpottedPokemonsComponent,
    UnseenPokemonsComponent,
    UserStatsComponent,
    SpottingStatsComponent,
    LeastSpottedPokemonsComponent,
    BestPlayersComponent,
    OverallRankComponent,
    SpottingRankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
