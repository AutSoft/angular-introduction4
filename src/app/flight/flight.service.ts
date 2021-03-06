import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Flight} from './models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {
  }

  listFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${environment.api}/Flights`);
  }

  getFlight(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${environment.api}/Flights/${id}`);
  }
}
