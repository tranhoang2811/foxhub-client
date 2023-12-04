import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbModalModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

import { RenterRoutingModule } from './renter-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { TopRateComponent } from './home/components/top-rate/top-rate.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LogInModalComponent } from './home/components/log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from './home/components/sign-up-modal/sign-up-modal.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { HistoryItemComponent } from './reservation-history/components/history-item/history-item.component';
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';
import { HistoryListComponent } from './reservation-history/components/history-list/history-list.component';
import { ReservationMapComponent } from './reservation-history/components/reservation-map/reservation-map.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopRateComponent,
    CarouselComponent,
    LogInModalComponent,
    SignUpModalComponent,
    ReservationHistoryComponent,
    HistoryItemComponent,
    HeaderNavBarComponent,
    HistoryListComponent,
    ReservationMapComponent,
  ],
  imports: [
    CommonModule,
    RenterRoutingModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbPaginationModule,
    GoogleMapsModule,
  ],
})
export class RenterModule {}
