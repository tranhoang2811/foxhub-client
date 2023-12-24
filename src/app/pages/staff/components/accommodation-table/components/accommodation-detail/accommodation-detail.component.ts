import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccommodationWithRelations } from 'src/app/interfaces/accommodation';
import { IMedia } from 'src/app/interfaces/media';
import { AccommodationService } from 'src/app/services/staff/accommodation.service';
import {
  IBookingDetailSectionData,
  IInfrastructureSectionData,
} from './interface';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css'],
})
export class AccommodationDetailComponent {
  public bookingDetailSectionData: IBookingDetailSectionData | undefined;
  public infrastructureSectionData: IInfrastructureSectionData | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accommodationService: AccommodationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const accommodationId = routeParams.get('id');
    this.getAccommodation(accommodationId ?? '');
  }

  private getAccommodation(id: string): void {
    this.accommodationService.getDetail(id).subscribe({
      next: (accommodation: IAccommodationWithRelations) => {
        this.bookingDetailSectionData = {
          title: `${accommodation.owner.firstName} ${
            accommodation.owner.lastName
          }'s ${accommodation.type.split('-').join(' ')}`,
          sources: accommodation.media
            ? accommodation.media.map((media: IMedia) => media.source)
            : [],
          description: accommodation.description ?? '',
          rooms: accommodation.rooms,
          status: accommodation.status ?? '',
        };
        this.infrastructureSectionData = {
          amenities: accommodation.properties ?? [],
        };
      },
    });
  }
}
