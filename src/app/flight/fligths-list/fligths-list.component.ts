import {Component, OnInit} from '@angular/core';
import {FlightService} from '../flight.service';
import {Flight} from '../models/flight.model';

@Component({
  selector: 'app-fligths-list',
  templateUrl: './fligths-list.component.html',
  styleUrls: ['./fligths-list.component.scss']
})
export class FligthsListComponent implements OnInit {
  flights: Flight[];
  displayedColumns = ['flightNumber', 'departureCity', 'arrivalCity'];

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.flightService.listFlights().subscribe(flights => this.flights = flights);
  }

}
