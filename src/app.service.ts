import { Injectable } from '@nestjs/common';
import { PRICING_RULES } from './pricing-rule';
import { CustomerType } from './shared/models/customer-type.enum';
import { PricingRule } from './shared/models/pricing-rule.model';

@Injectable()
export class AppService {

  getPricingRulesByCustomer(customerType: CustomerType, customerId?: number): PricingRule {
    const result: PricingRule = PRICING_RULES.find(rule =>
      rule.customerType === customerType && customerId?.toString() === rule.customerId?.toString()
    );

    return result;
  }
}
