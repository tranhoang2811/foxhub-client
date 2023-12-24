import { IAccommodation } from '../../accommodation';

export interface IPaginatedAccommodation extends IAccommodation {
  ownerName: string;
  averageRating: number;
  totalRating: number;
  imageUrl: string;
}
