import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FligthsListComponent } from './fligths-list/fligths-list.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [FlightComponent, FligthsListComponent],
  exports: [
    FlightComponent,
    FligthsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FlightModule { }
