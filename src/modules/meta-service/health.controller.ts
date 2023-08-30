import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('service/health')
export class HealthController {
  @Get()
  @HttpCode(200)
  async check() {
    return {
      dbConnection: true,
      message: 'Third party service is running',
    };
  }
}
