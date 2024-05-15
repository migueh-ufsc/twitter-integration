import Joi from 'joi';

export const createUserBodyValidator = Joi.object({
  id: Joi.string().required(),
  username: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  location: Joi.string().optional(),
  verified: Joi.boolean().required(),
  accountCreatedAt: Joi.date().required(),
  accountDeletedAt: Joi.date().optional(),
  nFollowers: Joi.number().required(),
  nFollowing: Joi.number().required(),
  nTweets: Joi.number().required(),
  sampleTimeline: Joi.array().items(Joi.object()).optional(),
});
