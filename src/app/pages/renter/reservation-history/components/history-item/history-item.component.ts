import { Component, Input } from '@angular/core';
import { IReservation } from 'src/app/interfaces/reservation';
import dayjs from 'dayjs';
import { EReservationPaymentStatus } from 'src/app/enums/reservation';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css'],
})
export class HistoryItemComponent {
  @Input() public reservation: IReservation | undefined;

  public formatDate(date?: Date): string {
    const inputDateFormat = dayjs(date);
    const formattedDate = inputDateFormat.format('DD MMM YYYY');

    return formattedDate;
  }

  public getStatusTitle(
    checkIn?: Date,
    checkOut?: Date,
    status?: EReservationPaymentStatus
  ): string {
    const currentDate = dayjs();
    const checkInDate = dayjs(checkIn);
    const checkOutDate = dayjs(checkOut);

    const isBetween =
      currentDate.isAfter(checkInDate) && currentDate.isBefore(checkOutDate);

    if (isBetween) {
      return 'Active';
    }

    if (status === EReservationPaymentStatus.COMPLETE) {
      return 'Completed';
    }

    if (status === EReservationPaymentStatus.CANCEL) {
      return 'Cancelled';
    }

    return 'Expired';
  }
}
