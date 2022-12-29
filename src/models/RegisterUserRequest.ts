import { Gender } from "./enums/Gender";

export interface RegisterUserRequest {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  gender?: keyof typeof Gender;
  country?: string;
  dateOfBirth?: string;
}
