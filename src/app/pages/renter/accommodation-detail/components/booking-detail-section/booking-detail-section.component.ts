import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { IBookingDetailSectionData } from '../interface';
import { IRoom } from 'src/app/interfaces/room';
@Component({
  selector: 'app-booking-detail-section',
  templateUrl: './booking-detail-section.component.html',
  styleUrls: ['./booking-detail-section.component.css'],
})
export class BookingDetailSectionComponent {
  @Input() bookingDetailSectionData: IBookingDetailSectionData | undefined;
  public selectedRoom: IRoom | undefined;

  constructor(private modelService: NgbModal) {}

  public openPaymentFormModal(): void {
    if (this.selectedRoom) {
      const paymentFormModal = this.modelService.open(PaymentFormComponent, {
        centered: true,
        modalDialogClass: 'payment-form-modal',
      });
      paymentFormModal.componentInstance.selectedRoom = this.selectedRoom;
      paymentFormModal.componentInstance.price =
        this.bookingDetailSectionData?.price ?? 0;
    }
  }

  public selectRoom(room: IRoom): void {
    this.selectedRoom = room;
  }
}
