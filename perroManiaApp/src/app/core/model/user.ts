export interface User {
  id?: string;
  name: string;
  lastName: string;
  dni: string;
  dateOfBirth?: string;
  rol?: any;
  email: string;
  password: string;
  gender?: any;
  country?: string;
  province?: string;
  provincePlace?: string;
  isActive?: boolean;
}
