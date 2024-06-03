import { ClearOperation } from './clear.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Clear Operation Model Test', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ClearOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        ClearOptions: {
          properties: {
            DO_NOT_USE_ignoreChildComponentTypes: {
              description: 'List of component types to ignore when the clear operation runs.',
              examples: [['textfield', 'textarea']],
              type: 'array',
            },
            targetKey: {
              description: 'key of target to apply the clear operation',
              examples: ['textfield'],
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
      },
      properties: {
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/ClearOptions',
        },
        type: {
          const: 'CLEAR',
          examples: ['CLEAR'],
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })

  it('should validate appropriately', () => {
    const op = createOperation(OperationTypes.CLEAR, { targetKey: 'abc-123' })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should set up the clear operation properly', () => {
    const op = createOperation(OperationTypes.CLEAR, { targetKey: 'abc-123' })
    expect(op.options.targetKey).toEqual('abc-123')
  })
})
