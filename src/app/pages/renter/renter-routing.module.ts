import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { StoryComponent } from './story/story.component';
import { PaymentFormComponent } from './accommodation-detail/components/payment-form/payment-form.component';
import { ProfileComponent } from './profile/profile.component';

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
  {
    path: 'renter/sign-up',
    component: SignUpFormComponent,
  },
  {
    path: 'renter/home-service',
    component: HomeServiceComponent,
  },
  {
    path: 'renter/foxhub-story',
    component: StoryComponent,
  },
  {
    path: 'renter/accommodation-detail/payment-form',
    component: PaymentFormComponent,
  },
  {
    path: 'renter/profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenterRoutingModule {}
