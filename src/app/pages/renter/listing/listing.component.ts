import { Component } from '@angular/core';
import { IPaginatedAccommodation } from 'src/app/interfaces/api/renter/accommodation';
import { IPaginationList } from 'src/app/interfaces/common';
import { AccommodationService } from 'src/app/services/renter/accommodation.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  public accommodations: IPaginatedAccommodation[] = [];
  public totalCount: number = 0;
  public errorMessage: string = '';

  constructor(private accommodationService: AccommodationService) {
    this.paginateAccommodationList();
  }

  private paginateAccommodationList() {
    const filter = {
      skip: 1,
      limit: 10,
    };

    this.accommodationService.paginate(filter).subscribe({
      next: (response: IPaginationList<IPaginatedAccommodation>) => {
        this.accommodations = response.list;
        this.totalCount = response.totalCount;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public getAccommodationCity(latitude: number, longitude: number): string {
    return `${latitude}, ${longitude}`;
  }

  public roundRating(rating: number): number {
    return Math.round(rating * 10) / 10;
  }
}
