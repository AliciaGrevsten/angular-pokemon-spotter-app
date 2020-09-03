import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SpottingStatsComponent } from './pages/spotting-stats/spotting-stats.component'
import { SpottingRankingsComponent } from './pages/spotting-rankings/spotting-rankings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'spottingstats',
    component: SpottingStatsComponent
  },
  {
    path:'spottingrankings',
    component: SpottingRankingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
