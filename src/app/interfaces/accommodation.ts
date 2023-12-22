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
