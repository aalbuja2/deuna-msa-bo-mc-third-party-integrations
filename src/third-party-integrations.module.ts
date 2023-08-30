import { Module } from '@nestjs/common';
import { MetaServiceModule } from './modules/meta-service/meta-service.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/service-configuration';
import { LoggerModule } from '@deuna/node-logger';
import { ALL_EXCEPTION_FILTERS_FOR_PROVIDER } from '@deuna/node-commons';
import { MetroUioModule } from './modules/metro-uio/metro-uio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
    }),
    MetaServiceModule,
    LoggerModule.forRoot({ context: 'Client Service' }),
    MetroUioModule,
  ],
  providers: [...ALL_EXCEPTION_FILTERS_FOR_PROVIDER],
})
export class ThirdPartyIntegrationsModule {}
