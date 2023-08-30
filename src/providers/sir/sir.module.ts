import { Module } from '@nestjs/common';
import { SIRProvider } from './sir.provider';
import { RedisModule } from '../../shared/redis/redis.module';
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [RedisModule, HttpModule],
  providers: [SIRProvider],
  exports: [SIRProvider],
})
export class SIRModule {}
