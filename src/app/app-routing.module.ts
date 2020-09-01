import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SpottingStatsComponent } from './pages/spotting-stats/spotting-stats.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'spottingstats',
    component: SpottingStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
