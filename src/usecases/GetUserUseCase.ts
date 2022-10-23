import { GetUserParams } from 'contracts/http/Params';
import { HttpResponse } from 'contracts/server/Http';
import { BaseUseCase } from 'contracts/usecases/BaseUseCase';
import { Tweet } from 'entities/Tweet';
import { User } from 'entities/User';
import { TweetService } from 'services/TweetService';
import { UserService } from 'services/UserService';
import { TwitterClient } from 'twitter/TwitterClient';

export class GetUserUseCase implements BaseUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly tweetService: TweetService,
  ) {}

  async execute(input: GetUserParams): Promise<HttpResponse> {
    const { user, tweets } = await this.getUserDataFromTwitterAPI(input);

    await this.saveUserToDB(user);
    await this.saveTweetsToDB(tweets);

    return {
      status: 200,
      body: { user },
    };
  }

  private async getUserDataFromTwitterAPI(
    params: GetUserParams,
  ): Promise<{ user: User; tweets: Tweet[] }> {
    let user: User;
    let tweets: Tweet[] = [];

    if (params.id) user = await TwitterClient.getUserById(params.id);

    if (params.username && !user)
      user = await TwitterClient.getUserByUsername(params.username);

    if (!user) throw new Error('User not found');
    //todo melhorar throw aqui
    else tweets = await TwitterClient.getUserTweets(user.id);

    return { user, tweets };
  }

  private async saveUserToDB(user: User): Promise<void> {
    await this.userService.create(user);
  }

  private async saveTweetsToDB(tweets: Tweet[]): Promise<void> {
    tweets.forEach(async (tweet) => {
      await this.tweetService.create(tweet);
    });
  }
}
