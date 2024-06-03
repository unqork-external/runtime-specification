import { ClearValidationErrorOperation } from './clearValidationErrors.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Set Property Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ClearValidationErrorOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        ClearValidationErrorsOptions: {
          properties: {
            targetKey: {
              type: 'string',
              description: 'key of the target which this operation will be applied',
              examples: ['textfield'],
              minLength: 1,
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
          $ref: '#/definitions/ClearValidationErrorsOptions',
        },
        type: {
          const: 'CLEAR_VALIDATION_ERRORS',
          examples: ['CLEAR_VALIDATION_ERRORS'],
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
    const op = createOperation(OperationTypes.CLEAR_VALIDATION_ERRORS, {
      targetKey: 'textfield',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should properly set up the clear validation errors operation', () => {
    const op = createOperation(OperationTypes.CLEAR_VALIDATION_ERRORS, {
      targetKey: 'textfield',
    })

    expect(op.options.targetKey).toStrictEqual('textfield')
  })
})
