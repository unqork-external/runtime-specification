/* eslint-disable max-len */
import { AsyncAllSettledOperation } from './asyncAllSettled.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: AsyncAllSettled Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AsyncAllSettledOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'ASYNC_ALL_SETTLED', examples: ['ASYNC_ALL_SETTLED'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/AsyncAllSettledOperationOptions' },
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
        AsyncAllSettledOperationOptions: {
          type: 'object',
          properties: {
            operations: {
              type: 'array',
              description:
                'Async operations that will run in parallel. When all have either resolved or rejected, this operation will finish',
              minItems: 1,
              items: {
                $ref: '#/definitions/Operation',
              },
            },
            throwOnAnyRejection: {
              description:
                'Controls if once all promises have settled, if this operation will throw with the rejected values. Default: false.',
              type: 'boolean',
            },
          },
          required: ['operations'],
        },
      },
    })
  })

  it('should fail validate when operations list is empty', () => {
    const op = createOperation(OperationTypes.ASYNC_ALL_SETTLED, {
      operations: [],
    })

    expect(validate(op)).toBeFalse()
  })
})
