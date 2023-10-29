import { OrderDirection } from "../components";

export interface IUser {
  address: string;
  age: number;
  avatar: string;
  email: string;
  created: Date;
  emailVisibility: false;
  id: string;
  name: string;
  updated: Date;
  username: string;
  verified: boolean;
  note: string;
}

export interface IUserFetch {
  page: number;
  perPage: number;
  filters?: string[];

  sortKey?: keyof IUser;
  sortDirection?: OrderDirection;
}
