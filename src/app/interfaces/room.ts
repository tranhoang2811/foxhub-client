import { ERoomStatus } from '../enums/room';

export interface IRoom {
  id: string;
  code: string;
  status: ERoomStatus;
  availableFrom: Date;
  availableTo: Date;
  availablePeople: number;
  accommodationId: string;
}
