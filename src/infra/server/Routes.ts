/** Arquivo pra cadastrar rotas caso exista um server */
import { Express } from 'express';
import { default as UserRouter } from './routes/UserRouter';
import swaggerUi from 'swagger-ui-express';
import docs from './api-doc.json'
export const initRoutes = (app: Express) => {
  app.get('/docs', swaggerUi.serve, swaggerUi.setup(docs));
  app.use('/user', UserRouter);
};
