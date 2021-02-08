import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FligthsListComponent } from './fligths-list/fligths-list.component';
import {FlightRoutingModule} from './flight-routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [FlightComponent, FligthsListComponent],
  exports: [
    FlightComponent,
    FligthsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
