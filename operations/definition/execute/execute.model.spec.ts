import { ExecuteOperation } from './execute.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Execute Operation Model Test', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ExecuteOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        ExecuteOptions: {
          properties: {
            targetKey: {
              description: 'key of target',
              examples: ['textfield'],
              minLength: 1,
              type: 'string',
            },
            blockExecution: {
              default: true,
              description:
                // eslint-disable-next-line max-len
                'Tells the runtime to not block execution.\n    Helpful if you know that the operations are not dependent one each other',
              type: 'boolean',
            },
            shouldExecute: {
              description: 'Tells the runtime to execute the operation if is true',
              type: 'boolean',
              default: true,
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
      },
      properties: {
        options: {
          $ref: '#/definitions/ExecuteOptions',
        },
        type: {
          const: 'EXECUTE',
          examples: ['EXECUTE'],
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

  it('should validate "execute" operations with only required properties', () => {
    const op = createOperation(OperationTypes.EXECUTE, { targetKey: 'abc-123', shouldExecute: true })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should validate "execute" operations with all properties', () => {
    const op = createOperation(OperationTypes.EXECUTE, { targetKey: 'abc-123', shouldExecute: true })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should set up the execute operation properly', () => {
    const op = createOperation(OperationTypes.EXECUTE, { targetKey: 'abc-123', shouldExecute: true })
    expect(op.options.targetKey).toEqual('abc-123')
    expect(op.options.shouldExecute).toEqual(true)
    expect(op.options.value).toEqual(undefined) // Deprecated for EXECUTE operation on UN-24111
  })
})
