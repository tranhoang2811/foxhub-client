import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

import { RenterRoutingModule } from './renter-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { TopRateComponent } from './home/components/top-rate/top-rate.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { LogInModalComponent } from './home/components/log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from './home/components/sign-up-modal/sign-up-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopRateComponent,
    CarouselComponent,
    LogInModalComponent,
    SignUpModalComponent,
  ],
  imports: [
    CommonModule,
    RenterRoutingModule,
    NgbCarouselModule,
    NgbModalModule,
    GoogleMapsModule,
  ],
})
export class RenterModule {}
