import {Component, OnInit} from '@angular/core';
import {FlightService} from './flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flights: any;

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights = this.flightService.listFlight()
      .subscribe(
        data => console.log(data),
        e => console.log(e),
        () => console.log('completed')
      );
  }

}
