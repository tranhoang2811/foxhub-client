import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { EUserRole } from 'src/app/enums/user';
import {
  IAccommodation,
  IAccommodationWithRelations,
} from 'src/app/interfaces/accommodation';
import { IPaginatedAccommodation } from 'src/app/interfaces/api/renter/accommodation';
import { IPaginationList } from 'src/app/interfaces/common';
import { IFilter } from 'src/app/interfaces/query';
import { ErrorService } from '../error.service';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public paginate(
    filter: IFilter<IAccommodation>
  ): Observable<IPaginationList<IPaginatedAccommodation>> {
    const url = `/${EUserRole.STAFF}/accommodations?filter=${JSON.stringify(
      filter
    )}`;

    return this.httpClient
      .get<IPaginationList<IPaginatedAccommodation>>(url)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public getDetail(id: string): Observable<IAccommodationWithRelations> {
    const url = `/${EUserRole.STAFF}/accommodations/${id}`;

    return this.httpClient
      .get<IAccommodationWithRelations>(url)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public getUsersInformation(): Observable<IUser[]> {
    const url = `/${EUserRole.STAFF}/users`;
    return this.httpClient.get<IUser[]>(url);
  }

  public getUserById(userId: string): Observable<IUser> {
    const url = `/${EUserRole.STAFF}/users/${userId}`;

    return this.httpClient
      .get<IUser>(url)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }
}
