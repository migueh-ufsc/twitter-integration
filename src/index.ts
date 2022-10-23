import { default as Database } from 'infra/database/Connection';
import { default as Broker } from 'infra/message-broker/Manager';
import { default as Server } from 'infra/server/Server';
import { TweetService } from 'services/TweetService';
import { UserService } from 'services/UserService';
import { GetUserUseCase } from 'usecases/GetUserUseCase';

(async () => {
  Promise.all([Database.init(), Broker.init(), Server.init()]).then(
    async () => {
      const userService = new UserService();
      const tweetService = new TweetService();
      const usecase = new GetUserUseCase(userService, tweetService);

      await usecase.execute({
        username: 'blackfyre_',
      });
    },
  );
})();
