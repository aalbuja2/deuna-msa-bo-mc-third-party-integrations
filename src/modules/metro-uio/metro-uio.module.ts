import { Module } from '@nestjs/common';
import { MetroUioController } from './metro-uio.controller';
import { MetroUioService } from './metro-uio.service';

@Module({
  imports: [],
  controllers: [MetroUioController],
  providers: [MetroUioService],
})
export class MetroUioModule {}
