import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../modules/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LimitToPipe } from '../pipes/limit-to.pipe';
@NgModule({
  declarations: [HeaderComponent,LimitToPipe],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FormsModule,
    CommonModule,
    HttpClientModule,
    LimitToPipe
  ]
})
export class SharedModuleModule { }
