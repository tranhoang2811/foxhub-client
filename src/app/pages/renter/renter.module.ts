import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbInputDatepicker,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AccommodationListComponent } from './home/components/accommodation-list/accommodation-list.component';
import { AccommodationItemComponent } from './home/components/accommodation-list/components/accommodation-item/accommodation-item.component';
import { AccommodationTypeOptionComponent } from './home/components/accommodation-list/components/accommodation-type-option/accommodation-type-option.component';
import { AdventureSectionComponent } from './home/components/adventure-section/adventure-section.component';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { StoryComponent } from './story/story.component';
import { PaymentFormComponent } from './accommodation-detail/components/payment-form/payment-form.component';
import { EditGuestNumberModalComponent } from './accommodation-detail/components/payment-form/components/edit-guest-number-modal/edit-guest-number-modal.component';
import { EditTimeModalComponent } from './accommodation-detail/components/payment-form/components/edit-time-modal/edit-time-modal.component';
import { ListingComponent } from './listing/listing.component';

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
    AccommodationListComponent,
    AccommodationItemComponent,
    AccommodationTypeOptionComponent,
    AdventureSectionComponent,
    AccommodationDetailComponent,
    SignUpFormComponent,
    HomeServiceComponent,
    StoryComponent,
    PaymentFormComponent,
    EditGuestNumberModalComponent,
    EditTimeModalComponent,
    ListingComponent,
  ],
  imports: [
    CommonModule,
    RenterRoutingModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbPaginationModule,
    GoogleMapsModule,
    NgbInputDatepicker,
    NgbDatepickerModule,
    ReactiveFormsModule,
  ],
})
export class RenterModule {}
