import { UserV2Result } from 'twitter-api-v2';
import { User } from 'entities/User';

export const twitterUserToUser = (twitterUser: UserV2Result): User => {
  const {
    id,
    username,
    name,
    description,
    location,
    verified,
    created_at,
    public_metrics,
  } = twitterUser.data;

  return new User({
    id,
    username,
    name,
    description,
    location,
    verified: verified !== undefined ? verified : false,
    accountCreatedAt: created_at as unknown as Date,
    nFollowers: public_metrics?.followers_count || 0,
    nFollowing: public_metrics?.following_count || 0,
    nTweets: public_metrics?.tweet_count || 0,
  });
};
