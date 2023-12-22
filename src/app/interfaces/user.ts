import { EUserRole, EUserStatus } from '../enums/user';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: Date;
  occupation: string;
  status: EUserStatus;
  role: EUserRole;
}
