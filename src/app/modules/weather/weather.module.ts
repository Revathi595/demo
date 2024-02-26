import { NgModule } from '@angular/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    WeatherRoutingModule,
    SharedModuleModule
  ]
})
export class WeatherModule { }
