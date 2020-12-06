import { CartItemProps } from 'library/types/BaseComponentTypes';

export interface SnapshotData {
  createdAt?: {
    nanoseconds: number;
    seconds: number;
  };
  displayname?: string;
  email?: string;
  cartItems?: CartItemProps[];
}

export interface UserProfile extends SnapshotData {
  id: string;
}
