import { Module } from '@nestjs/common';
import { SIRProvider } from './sir.provider';
import { RedisModule } from '../../shared/redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [SIRProvider],
  exports: [SIRProvider],
})
export class SIRModule {}
