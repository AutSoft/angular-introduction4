import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AuthGuardService} from './auth/auth-guard.service';

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
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'flights',
        loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
