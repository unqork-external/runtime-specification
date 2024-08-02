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
    expect(schema).toMatchSnapshot()
  })

  it('Reset operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.RESET, {
      targetKey: 'name1',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
