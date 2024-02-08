import { SubmitOperation } from './submit.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Submit Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SubmitOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: {
          type: 'string',
          const: 'SUBMIT',
          examples: ['SUBMIT'],
        },
        options: {
          $ref: '#/definitions/SubmitOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SubmitOptions: {
          type: 'object',
          properties: {
            targetEntityKey: {
              type: 'string',
              examples: ['submissionData'],
              description: 'Key of a target entity',
              minLength: 1,
            },
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
          },
          required: ['targetEntityKey'],
        },
      },
    })
  })

  it('should validate submit operation with all required keys', () => {
    const op = createOperation(OperationTypes.SUBMIT, {
      targetEntityKey: 'firstName',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if no targetEntityKey is provided', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.SUBMIT, {})

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
