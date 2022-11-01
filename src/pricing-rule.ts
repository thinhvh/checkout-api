import { CustomerType } from "./shared/models/customer-type.enum";
import { ItemType } from "./shared/models/item-type.enum";
import { PricingRule } from "./shared/models/pricing-rule.model";

const smallPrice: number = 11.99;
const mediumPrice: number = 15.99;
const largePrice: number = 21.99;

export const PRICING_RULES: PricingRule[] = [
    {
        id: 1,
        customerType: CustomerType.Normal,
        rules: [
            {
                id: 1,
                itemType: ItemType.Small,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: smallPrice
            },
            {
                id: 2,
                itemType: ItemType.Medium,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: mediumPrice
            },
            {
                id: 3,
                itemType: ItemType.Large,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: largePrice
            }
        ]
    },
    {
        id: 2,
        customerType: CustomerType.Member,
        customerId: 1,
        rules: [
            {
                id: 3,
                itemType: ItemType.Small,
                buyAmount: 3,
                payAmount: 2,
                pricePerUnit: smallPrice
            },
            {
                id: 4,
                itemType: ItemType.Medium,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: mediumPrice
            },
            {
                id: 5,
                itemType: ItemType.Large,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: largePrice
            },
        ]
    },
    {
        id: 3,
        customerType: CustomerType.Member,
        customerId: 2,
        rules: [
            {
                id: 6,
                itemType: ItemType.Small,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: smallPrice
            },
            {
                id: 7,
                itemType: ItemType.Medium,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: mediumPrice
            },
            {
                id: 8,
                itemType: ItemType.Large,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: 19.99
            },
        ]
    },
    {
        id: 4,
        customerType: CustomerType.Member,
        customerId: 3,
        rules: [
            {
                id: 9,
                itemType: ItemType.Small,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: smallPrice
            },
            {
                id: 10,
                itemType: ItemType.Medium,
                buyAmount: 5,
                payAmount: 4,
                pricePerUnit: mediumPrice
            },
            {
                id: 11,
                itemType: ItemType.Large,
                buyAmount: 1,
                payAmount: 1,
                pricePerUnit: largePrice
            }
        ]
    }
]