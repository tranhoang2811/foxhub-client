import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'renter/home',
    pathMatch: 'full',
  },
  {
    path: 'renter/home',
    component: HomeComponent,
  },
  {
    path: 'renter/reservation-history',
    component: ReservationHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenterRoutingModule {}
