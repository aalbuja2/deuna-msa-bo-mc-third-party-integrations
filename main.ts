import { setupEnvironment } from '@deuna/node-environments';
setupEnvironment();
import { Logger } from '@deuna/node-logger';
import { SERVICE_NAME } from './src/constants/common';
const logger = new Logger({ context: `${SERVICE_NAME} Service` });
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ThirdPartyIntegrationsModule } from './src/third-party-integrations.module';

async function bootstrap() {
  const app = await NestFactory.create(ThirdPartyIntegrationsModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  await app.listen(process.env.SERVICE_PORT);
  logger.log(`Microservice is listening on: ${await app.getUrl()}`);
}
bootstrap();
