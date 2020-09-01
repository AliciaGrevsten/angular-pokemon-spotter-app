import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterPokemonComponent } from './components/register-pokemon/register-pokemon.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SpottedPokemonsComponent } from './components/spotted-pokemons/spotted-pokemons.component';
import { UnseenPokemonsComponent } from './components/unseen-pokemons/unseen-pokemons.component';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';
import { SpottingStatsComponent } from './pages/spotting-stats/spotting-stats.component';
import { LeastSpottedPokemonsComponent } from './components/least-spotted-pokemons/least-spotted-pokemons.component';

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
    LeastSpottedPokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
