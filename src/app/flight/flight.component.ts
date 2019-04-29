import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Flight} from './models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  flightDetails: Flight;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.data.subscribe((data: { flight: Flight }) => {
      this.flightDetails = data.flight;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
