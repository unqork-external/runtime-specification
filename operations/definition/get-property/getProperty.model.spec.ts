import { GetPropertyOperation } from './getProperty.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: GetProperty Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(GetPropertyOperation)
    validate = response.validate
    schema = schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Get Property operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.GET_PROPERTY, {
      targetKey: 'helloTargetKey',
      property: 'worldProperty',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
