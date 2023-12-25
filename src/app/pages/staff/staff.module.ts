import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule, RoutingComponent } from './staff-routing.module';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';
import { AccommodationDetailComponent } from './components/accommodation-table/components/accommodation-detail/accommodation-detail.component';
import { InfrastructureSectionComponent } from './components/accommodation-table/components/accommodation-detail/components/infrastructure-section/infrastructure-section.component';
import { ChunkPipe } from './components/accommodation-table/components/accommodation-detail/components/infrastructure-section/chunk.pipe';
import { BookingDetailSectionComponent } from './components/accommodation-table/components/accommodation-detail/components/booking-detail-section/booking-detail-section.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IdFilterPipe } from './components/accommodation-table/components/accommodation-detail/filter/id-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StaffMainComponent } from './staff-main/staff-main.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { RouterModule } from '@angular/router';
import { UserFilterPipe } from './components/users-table/filter/id-filter.pipe';
import { UserDetailComponent } from './components/users-table/components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AccommodationTableComponent,
    AccommodationDetailComponent,
    InfrastructureSectionComponent,
    ChunkPipe,
    BookingDetailSectionComponent,
    IdFilterPipe,
    SidebarComponent,
    StaffMainComponent,
    UsersTableComponent,
    RoutingComponent,
    UserFilterPipe,
    UserDetailComponent,

  ],
  imports: [
    StaffRoutingModule,
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    RouterModule,
  ],
})
export class StaffModule {}
