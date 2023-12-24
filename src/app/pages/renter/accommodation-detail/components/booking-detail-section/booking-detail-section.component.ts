import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { IBookingDetailSectionData } from '../interface';
@Component({
  selector: 'app-booking-detail-section',
  templateUrl: './booking-detail-section.component.html',
  styleUrls: ['./booking-detail-section.component.css'],
})
export class BookingDetailSectionComponent {
  @Input() bookingDetailSectionData: IBookingDetailSectionData | undefined;
  constructor(private modelService: NgbModal) {}

  public openPaymentFormModal(): void {
    const paymentFormModal = this.modelService.open(PaymentFormComponent, {
      centered: true,
      modalDialogClass: 'payment-form-modal',
    });
  }
}
