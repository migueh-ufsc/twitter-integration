import { ITweet } from 'contracts/entities/ITweet';
import { TweetModel } from 'infra/database/schemas/TweetSchema';
import { logger } from 'infra/logger';
import { HydratedDocument } from 'mongoose';
import { BaseService } from './BaseService';

export class TweetService extends BaseService<ITweet> {
  constructor() {
    super(TweetModel);
  }

  public async findById(id: string): Promise<ITweet> {
    try {
      return await this.model.findOne({
        id,
      });
    } catch (error) {
      logger.error('Error while trying to find Tweet by id', {
        name: this.model.modelName,
        id,
      });
    }
  }

  public async findByAuthorID(authorId: string): Promise<ITweet[]> {
    try {
      return await this.model.find({
        authorId,
      });
    } catch (error) {
      logger.error('Error while trying to find Tweet by authorId', {
        name: this.model.modelName,
        authorId,
      });
    }
  }

  public async batchCreate(
    objs: ITweet[],
  ): Promise<HydratedDocument<ITweet>[]> {
    try {
      return await this.model.create(objs);
    } catch (error) {
      logger.error('Error while creating multiple tweets', {
        name: this.model.modelName,
      });
    }
  }
}
