import { Component } from '@angular/core';
import { IPaginationList } from 'src/app/interfaces/common';
import { IReservation } from 'src/app/interfaces/reservation';
import { ReservationService } from 'src/app/services/renter/reservation.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css'],
})
export class HistoryListComponent {
  public reservations: IReservation[] = [];
  public pageSize: number = 3;
  public page: number = 1;
  public totalCount: number = 0;
  public errorMessage: string = '';

  constructor(private reservationService: ReservationService) {
    this.getReservationList(1);
  }

  public getReservationList(page: number) {
    const filter = {
      skip: (page - 1) * this.pageSize,
      limit: this.pageSize,
    };
    const status = 'all';
    this.reservationService.paginate(filter, status).subscribe({
      next: (response: IPaginationList<IReservation>) => {
        this.reservations = response.list;
        this.totalCount = response.totalCount;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public pageChanged(page: number): void {
    this.page = page;
    this.getReservationList(page);
  }
}
