import { IUser } from './user';

export interface IAccommodationRating {
  id: string;
  rate: number;
  review?: string;
  accommodationId: string;
  reviewerId: string;
}

export interface IAccommodationRatingWithRelations
  extends IAccommodationRating {
  reviewer: IUser;
}
