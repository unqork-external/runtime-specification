import { TryCatchOperation } from './tryCatch.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Try Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TryCatchOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'TRY_CATCH', examples: ['TRY_CATCH'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/TryCatchOperationOptions' },
      },
      required: ['options'],
      definitions: {
        Operation: {
          properties: {
            name: {
              description: 'Name of the operation',
              type: 'string',
            },
            type: {
              type: 'object',
            },
          },
          type: 'object',
        },
        TryCatchOperationOptions: {
          type: 'object',
          properties: {
            try: {
              type: 'array',
              description: 'Array of operations to attempt',
              minItems: 1,
              items: {
                $ref: '#/definitions/Operation',
              },
            },
            catch: {
              description: 'Operations to run in the event an error is thrown from the tried operations',
              minItems: 1,
              items: {
                $ref: '#/definitions/Operation',
              },
              type: 'array',
            },
          },
          required: ['try', 'catch'],
        },
      },
    })
  })
})
