import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { EUserRole } from 'src/app/enums/user';
import { IPaginationList } from 'src/app/interfaces/common';
import { IFilter } from 'src/app/interfaces/query';
import { IReservation } from 'src/app/interfaces/reservation';
import { ErrorService } from '../error.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public paginate(
    filter: IFilter<IReservation>,
    status: string
  ): Observable<IPaginationList<IReservation>> {
    const url = `/${
      EUserRole.RENTER
    }/reservations/${status}?filter=${JSON.stringify(filter)}`;

    return this.httpClient
      .get<IPaginationList<IReservation>>(url)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public makeReservation(
    reservation: Omit<
      IReservation,
      'id' | 'renterId' | 'paymentCode' | 'status'
    >
  ): Observable<IReservation> {
    const url = `/${EUserRole.RENTER}/reservations`;

    return this.httpClient
      .post<IReservation>(url, reservation)
      .pipe(catchError(this.errorService.handleError));
  }
}
