export interface IUser {
  id: string;
  username: string;
  name?: string;
  description?: string;
  location?: string;
  verified: boolean;
  accountCreatedAt: Date;
  accountDeletedAt?: Date;
  nFollowers: number;
  nFollowing: number;
  nTweets: number;
  follows?: string[];
  isFollowedBy?: string[];
  sampleTimeline?: string[];
}
