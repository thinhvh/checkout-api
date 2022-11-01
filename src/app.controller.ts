import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/pricing-rule')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':customerType/:customerId?')
  async getPricingRule(@Param() { customerType, customerId }) {
    const response = this.appService.getPricingRulesByCustomer(
      customerType,
      customerId,
    );

    // cheet
    await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
    return response;
  }
}
