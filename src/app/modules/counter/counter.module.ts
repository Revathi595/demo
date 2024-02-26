import { NgModule } from '@angular/core';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CounterRoutingModule,
    SharedModuleModule
  ]
})
export class CounterModule { }
