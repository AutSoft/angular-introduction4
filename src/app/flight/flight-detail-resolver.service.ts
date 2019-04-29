import { Injectable } from '@angular/core';
import {FlightService} from './flight.service';
import {Flight} from './models/flight.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailResolverService implements Resolve<Flight> {

  constructor(private flightService: FlightService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> | Promise<Flight> | Flight {
    const flightId = Number(route.paramMap.get('id'));

    return this.flightService.getFlight(flightId);
  }
}
