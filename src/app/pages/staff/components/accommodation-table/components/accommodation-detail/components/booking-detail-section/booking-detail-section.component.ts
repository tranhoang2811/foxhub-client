import { Component, Input } from '@angular/core';
import { IBookingDetailSectionData } from '../../interface';
@Component({
  selector: 'app-booking-detail-section',
  templateUrl: './booking-detail-section.component.html',
  styleUrls: ['./booking-detail-section.component.css'],
})
export class BookingDetailSectionComponent {
  @Input() bookingDetailSectionData: IBookingDetailSectionData | undefined;
  public getStatusClass(status: string | undefined): string {
    if (status) {
      switch (status.toLowerCase()) {
        case 'pending':
          return 'status-pending';
        case 'approved':
          return 'status-approved';
        case 'banned':
          return 'status-banned';
        case 'rejected':
          return 'status-rejected';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
}
