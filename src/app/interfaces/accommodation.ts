import { IAccommodationRatingWithRelations } from './accommodation-rating';
import { IMedia } from './media';
import { IRoom } from './room';
import { IUser } from './user';

export interface IAccommodation {
  id: string;
  latitude: number;
  longitude: number;
  price: number;
  description?: string;
  status: string;
  type: string;
  properties?: string[];
  ownerId: string;
}

export interface IAccommodationWithRelations extends IAccommodation {
  owner: IUser;
  rooms: IRoom[];
  media: IMedia[];
  accommodationRatings: IAccommodationRatingWithRelations[];
}
