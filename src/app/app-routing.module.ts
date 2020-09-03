import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SpottingStatsComponent } from './pages/spotting-stats/spotting-stats.component'
import { RegisterPokemonComponent } from './components/register-pokemon/register-pokemon.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'spottingstats',
    component: SpottingStatsComponent
  },
  {
    path: 'registerpokemon',
    component: RegisterPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
