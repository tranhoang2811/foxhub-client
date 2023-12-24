import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';
import { AccommodationDetailComponent } from './components/accommodation-table/components/accommodation-detail/accommodation-detail.component';
import { InfrastructureSectionComponent } from './components/accommodation-table/components/accommodation-detail/components/infrastructure-section/infrastructure-section.component';
import { ChunkPipe } from './components/accommodation-table/components/accommodation-detail/components/infrastructure-section/chunk.pipe';
import { BookingDetailSectionComponent } from './components/accommodation-table/components/accommodation-detail/components/booking-detail-section/booking-detail-section.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IdFilterPipe } from './components/accommodation-table/id-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AccommodationTableComponent,
    AccommodationDetailComponent,
    InfrastructureSectionComponent,
    ChunkPipe,
    BookingDetailSectionComponent,
    IdFilterPipe,
  ],
  imports: [StaffRoutingModule, CommonModule, NgbCarouselModule, FormsModule],
})
export class StaffModule {}
