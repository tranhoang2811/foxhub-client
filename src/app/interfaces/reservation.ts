import {
  EPaymentMethod,
  EReservationPaymentStatus,
} from '../enums/reservation';

export interface IReservation {
  id: string;
  numberOfAdult: number;
  numberOfChildren: number;
  paymentCode: number;
  paymentMethod: EPaymentMethod;
  status: EReservationPaymentStatus;
  checkIn: Date;
  checkOut: Date;
  roomId: string;
  renterId: string;
}
