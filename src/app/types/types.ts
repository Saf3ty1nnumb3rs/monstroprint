export interface SnapshotData {
  createdAt?: {
    nanoseconds: number;
    seconds: number;
  };
  displayname?: string;
  email?: string;
}

export interface UserProfile extends SnapshotData {
  id: string;
}
