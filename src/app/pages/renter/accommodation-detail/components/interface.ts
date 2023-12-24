import { IAccommodationRatingWithRelations } from 'src/app/interfaces/accommodation-rating';
import { IRoom } from 'src/app/interfaces/room';

export interface IBookingDetailSectionData {
  title: string;
  sources: string[];
  description: string;
  rooms: IRoom[];
}

export interface IInfrastructureSectionData {
  amenities: string[];
}

export interface IReviewSectionData {
  feedbacks: IAccommodationRatingWithRelations[];
}
