import { Module } from '@nestjs/common';

import * as redisStore from 'cache-manager-redis-store';
import { ACCOUNT_REDIS_TTL } from '../../constants/common';
import { LoggerModule } from '@deuna/node-logger';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisService } from './redis.service';

@Module({
  imports: [
    LoggerModule.forRoot({ context: 'Redis data base Auth0 Service' }),
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: ACCOUNT_REDIS_TTL,
      ...(process.env.REDIS_TLS_ENABLED === 'true'
        ? {
            auth_pass: process.env.REDIS_AUTH,
            tls: { servername: process.env.REDIS_HOST },
          }
        : {}),
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
