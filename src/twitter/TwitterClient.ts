import { User } from 'entities/User';
import { Config } from 'infra/config';
import { TwitterApi } from 'twitter-api-v2';
import { userParams } from './helpers/Params';
import { twitterUserToUser } from './helpers/Parsers';

export class TwitterClient {
  private static readonly client = new TwitterApi(Config.twitter.bearerToken);
  private static v2 = TwitterClient.client.v2;

  public static async getUserById(id: string): Promise<User> {
    try {
      const twitterUser = await TwitterClient.v2.user(id, userParams);
      return twitterUserToUser(twitterUser);
    } catch (err: unknown) {
      throw err;
      //todo melhorar logs aqui
    }
  }

  public static async getUserByUsername(username: string): Promise<User> {
    try {
      const twitterUser = await TwitterClient.v2.userByUsername(
        username,
        userParams,
      );
      return twitterUserToUser(twitterUser);
    } catch (err: unknown) {
      throw err;
      //todo melhorar logs aqui
    }
  }
}
