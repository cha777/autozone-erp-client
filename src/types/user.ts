export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  role: UserRole;
  [key: string]: any;
}

export type UserRole =
  | 'Super User'
  | 'Admin'
  | 'Manager'
  | 'Cashier'
  | 'Stock Manager';
