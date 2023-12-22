export interface IAccommodationRating {
  id: string;
  rating: number;
  review?: string;
  accommodationId: string;
  reviewerId: string;
}
