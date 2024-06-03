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
    expect(schema).toMatchSnapshot()
  })

  it('should validate "execute" operations with only required properties', () => {
    const op = createOperation(OperationTypes.EXECUTE, {
      targetKey: 'abc-123',
      signalTarget: 'root',
      shouldExecute: true,
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should validate "execute" operations with all properties', () => {
    const op = createOperation(OperationTypes.EXECUTE, {
      targetKey: 'abc-123',
      signalTarget: 'root',
      shouldExecute: true,
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should set up the execute operation properly', () => {
    const op = createOperation(OperationTypes.EXECUTE, {
      targetKey: 'abc-123',
      signalTarget: 'root',
      shouldExecute: true,
    })
    expect(op.options.targetKey).toEqual('abc-123')
    expect(op.options.shouldExecute).toEqual(true)
  })
})
