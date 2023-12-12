import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';

@NgModule({
  declarations: [AccommodationTableComponent],
  imports: [StaffRoutingModule, CommonModule],
})
export class StaffModule {}
