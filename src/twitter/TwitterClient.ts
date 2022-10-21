import { Config } from 'infra/config';
import { TwitterApi } from 'twitter-api-v2';

export class TwitterClient {
  private static readonly client = new TwitterApi(Config.twitter.bearerToken);
}
