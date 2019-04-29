import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightDetailResolverService} from './flight-detail-resolver.service';
import {FlightComponent} from './flight.component';

const routes: Routes = [
  {
    path: '',
    component: FlightComponent
  },
  {
    path: ':id',
    component: FlightComponent,
    resolve: {
      flight: FlightDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {
}
