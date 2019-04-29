import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FlightComponent} from './flight/flight.component';
import {FlightDetailResolverService} from './flight/flight-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'flights/:id',
    component: FlightComponent,
    resolve: {
      flight: FlightDetailResolverService
    }
  },
  {
    path: 'flights',
    component: FlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
