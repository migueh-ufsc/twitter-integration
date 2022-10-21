import { Config } from 'infra/config';
import { TwitterApi } from 'twitter-api-v2';

export class TwitterClient {
  private static readonly client = new TwitterApi({
    appKey: Config.twitter.key,
    appSecret: Config.twitter.keySecret,
  });

  public static async validateConnection(): Promise<void> {
    const teste = await TwitterClient.client.appLogin();
    const result = await teste.currentUserV2();
    console.log(result.data);
    console.log(result.errors);
  }
}
