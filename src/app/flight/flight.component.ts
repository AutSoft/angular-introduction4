import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  flightId: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .pipe(
        map(params => params.id)
      )
      .subscribe((id) => this.flightId = id);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
