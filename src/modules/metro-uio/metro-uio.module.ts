import { Module } from '@nestjs/common';
import { MetroUioController } from './metro-uio.controller';
import { MetroUioService } from './metro-uio.service';
import { SIRModule } from '../../providers/sir/sir.module';

@Module({
  imports: [SIRModule],
  controllers: [MetroUioController],
  providers: [MetroUioService],
})
export class MetroUioModule {}
