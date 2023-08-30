import { Controller, Get } from '@nestjs/common';
import { MetroUioService } from './metro-uio.service';

@Controller('metro-uio')
export class MetroUioController {
  constructor(private readonly metrouioservice: MetroUioService) {}

  @Get()
  buyTicket() {
    return this.metrouioservice.buyTicket();
  }
}
