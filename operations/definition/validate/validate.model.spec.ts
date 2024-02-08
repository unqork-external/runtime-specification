import { ValidateOperation } from './validate.model'
import { generateSchemaAndValidate, trimAll } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Validate Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ValidateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'VALIDATE', examples: ['VALIDATE'] },
        options: { $ref: '#/definitions/ValidateOptions' },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        ValidateOptions: {
          type: 'object',
          properties: {
            shouldValidate: {
              default: true,
              description: 'Skip validation when it is false.',
              type: 'boolean',
            },
            targetKey: {
              description: 'targetKey refers to the intended target to validate.',
              examples: ['firstNameTextField', 'grid.row(0).col(0)'],
              minLength: 1,
              type: 'string',
            },
            throwOnError: {
              default: false,
              description:
                'If throwOnError is true and validation has failed. Stop execution for this operation chain.',
              type: 'boolean',
            },
            value: {
              description: 'Value to be validated.',
              type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
            },
          },
          required: ['targetKey'],
        },
      },
    })
  })

  it('Validate operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.VALIDATE, {
      targetKey: 'name1',
      shouldValidate: true,
      throwOnError: true,
      value: 'hi',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
