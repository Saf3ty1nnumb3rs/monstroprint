import { UserProfile } from 'app/types/types';

export const selectUser = (state: {
  user: UserProfile | null;
}): UserProfile | null => state.user;
