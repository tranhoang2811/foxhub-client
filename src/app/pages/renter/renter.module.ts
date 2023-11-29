import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenterRoutingModule } from './renter-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { TopRateComponent } from './home/components/top-rate/top-rate.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, TopRateComponent, CarouselComponent],
  imports: [CommonModule, RenterRoutingModule],
})
export class RenterModule {}
