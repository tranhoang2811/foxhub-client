import { Component } from '@angular/core';
import { IPaginatedAccommodation } from 'src/app/interfaces/api/renter/accommodation';
import { IPaginationList } from 'src/app/interfaces/common';
import { AccommodationService } from 'src/app/services/staff/accommodation.service';
import { IdFilterPipe } from './components/accommodation-detail/filter/id-filter.pipe';
@Component({
  selector: 'app-accommodation-table',
  templateUrl: './accommodation-table.component.html',
  styleUrls: ['./accommodation-table.component.css'],
})
export class AccommodationTableComponent {
  public accommodations: IPaginatedAccommodation[] = [];
  public errorMessage: string = '';

  constructor(private accommodationService: AccommodationService) {
    this.paginateAccommodationList();
  }

  private paginateAccommodationList(): void {
    const filter = {};

    this.accommodationService.paginate(filter).subscribe({
      next: (response: IPaginationList<IPaginatedAccommodation>) => {
        this.accommodations = response.list;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public getStatusClass(status: string): string {
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
  }
  searchTerm: string = '';
  applyFilter() {}
}
