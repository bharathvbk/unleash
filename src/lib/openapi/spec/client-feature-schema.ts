import { FromSchema } from 'json-schema-to-ts';
import { constraintSchema } from './constraint-schema';
import { parametersSchema } from './parameters-schema';
import { featureStrategySchema } from './feature-strategy-schema';
import { clientVariantSchema } from './client-variant-schema';

export const clientFeatureSchema = {
    $id: '#/components/schemas/clientFeatureSchema',
    type: 'object',
    required: ['name', 'enabled'],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        description: {
            type: 'string',
            nullable: true,
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        lastSeenAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        enabled: {
            type: 'boolean',
        },
        stale: {
            type: 'boolean',
        },
        impressionData: {
            type: 'boolean',
            nullable: true,
        },
        project: {
            type: 'string',
        },
        strategies: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/featureStrategySchema',
            },
        },
        variants: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/clientVariantSchema',
            },
            nullable: true,
        },
    },
    components: {
        schemas: {
            constraintSchema,
            parametersSchema,
            featureStrategySchema,
            clientVariantSchema,
        },
    },
} as const;

export type ClientFeatureSchema = FromSchema<typeof clientFeatureSchema>;
