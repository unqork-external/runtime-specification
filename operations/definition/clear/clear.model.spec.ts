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
    expect(schema).toMatchSnapshot()
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
