import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Flight} from './models/flight.model';
import {FlightService} from './flight.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  flightDetails: Flight;

  constructor(private activatedRoute: ActivatedRoute, private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.data.subscribe((data: { flight: Flight }) => {
      this.flightDetails = data.flight;
    });

    this.flightService.listFlights()
      .pipe(
        map(flights => flights.map(flight => {
          delete flight.delay;
          return flight;
        }))
      ).subscribe(
      flights => {
        console.log(flights);
      },
      error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
