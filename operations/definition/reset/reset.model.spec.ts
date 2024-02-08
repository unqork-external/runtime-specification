import { ResetOperation } from './reset.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Reset Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ResetOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'RESET', examples: ['RESET'] },
        options: { $ref: '#/definitions/ResetOperationOptions' },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        ResetOperationOptions: {
          type: 'object',
          properties: {
            targetKey: {
              description: 'targetKey refers to the intended target to reset.',
              examples: ['firstNameTextField', 'grid.row(0).col(0)'],
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey'],
        },
      },
    })
  })

  it('Reset operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.RESET, {
      targetKey: 'name1',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
