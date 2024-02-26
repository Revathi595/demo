import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './modules/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter',
  },
  {
    path: 'counter',
    // component: CounterComponent
    loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule),
    data: { title: 'Counter App' }
  },
  {
    path: 'weather',
    //component: WeatherComponent
    loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule)
  },
  {
    path: '**',
    redirectTo: 'counter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
