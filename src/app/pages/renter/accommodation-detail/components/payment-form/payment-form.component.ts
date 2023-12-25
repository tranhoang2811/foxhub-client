import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IRoom } from 'src/app/interfaces/room';
import { EditGuestNumberModalComponent } from './components/edit-guest-number-modal/edit-guest-number-modal.component';
import { EditTimeModalComponent } from './components/edit-time-modal/edit-time-modal.component';
import dayjs from 'dayjs';
import { ReservationService } from 'src/app/services/renter/reservation.service';
import { EPaymentMethod } from 'src/app/enums/reservation';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent {
  @Input() selectedRoom: IRoom | undefined;
  @Input() price: number = 0;
  public paymentMethod: string | undefined;
  public totalNumberOfGuest: number = 0;
  public numberOfGuest: Record<string, number> = {};
  public timeRange: Record<string, string> = {};
  public totalNight: number = 0;

  constructor(
    private modelService: NgbModal,
    private activeModal: NgbActiveModal,
    private reservationService: ReservationService
  ) {}

  public openEditTimeModal(): void {
    const editTimeModal = this.modelService.open(EditTimeModalComponent, {
      centered: true,
      modalDialogClass: 'edit-time-modal',
    });
    editTimeModal.componentInstance.timeRange = this.timeRange;
    editTimeModal.componentInstance.onDateSave.subscribe(
      (date: Record<string, string>) => {
        this.timeRange = date;
        this.totalNight = this.calculateTotalNight(
          this.timeRange['checkIn'],
          this.timeRange['checkOut']
        );
      }
    );
  }

  public openEditGuestNumberModal(): void {
    const editGuestNumberModal = this.modelService.open(
      EditGuestNumberModalComponent,
      {
        centered: true,
        modalDialogClass: 'edit-guest-number-modal',
      }
    );
    editGuestNumberModal.componentInstance.availablePeople =
      this.selectedRoom?.availablePeople;
    editGuestNumberModal.componentInstance.numberOfGuest = this.numberOfGuest;
    editGuestNumberModal.componentInstance.onSaveNumberOfGuest.subscribe(
      (numberOfGuest: Record<string, number>) => {
        this.totalNumberOfGuest =
          numberOfGuest['numberOfAdult'] + numberOfGuest['numberOfChildren'];
        this.numberOfGuest = numberOfGuest;
      }
    );
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  public selectPaymentMethod(method: string): void {
    this.paymentMethod = method;
  }

  public formatDate(date?: string): string {
    const inputDateFormat = dayjs(date);
    const formattedDate = inputDateFormat.format('DD MMM YYYY');

    return formattedDate;
  }

  public getTimeRange(): string {
    const from = this.formatDate(this.timeRange['checkIn']);
    const to = this.formatDate(this.timeRange['checkOut']);
    const timeRange = `${from} - ${to}`;

    return timeRange;
  }

  private calculateTotalNight(fromDate: string, toDate: string): number {
    const checkIn = dayjs(fromDate);
    const checkOut = dayjs(toDate);
    const totalNight = checkOut.diff(checkIn, 'day');

    return totalNight;
  }

  public makeReservation(): void {
    const reservation = {
      numberOfAdult: this.numberOfGuest['numberOfAdult'],
      numberOfChildren: this.numberOfGuest['numberOfChildren'],
      paymentMethod: this.paymentMethod as EPaymentMethod,
      checkIn: dayjs(this.timeRange['checkIn']).toDate(),
      checkOut: dayjs(this.timeRange['checkOut']).toDate(),
      roomId: this.selectedRoom?.id ?? '',
    };
    this.reservationService.makeReservation(reservation).subscribe();
    this.closeModal()
  }
}
