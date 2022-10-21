import { UsersV2Params } from 'twitter-api-v2';

export const userParams: Partial<UsersV2Params> = {
  'user.fields': [
    'created_at',
    'description',
    'entities',
    'id',
    'location',
    'name',
    'pinned_tweet_id',
    'profile_image_url',
    'protected',
    'public_metrics',
    'username',
    'verified',
  ],
};
