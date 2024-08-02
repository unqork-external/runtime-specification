import { ValidateOperation } from './validate.model'
import { generateSchemaAndValidate } from '../../../../utilities'
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
    expect(schema).toMatchSnapshot()
  })

  it('Validate operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.VALIDATE, {
      targetKey: 'name1',
      shouldValidate: true,
      throwOnError: true,
      validateChildren: false,
      ignoreDirectIsolated: false,
      value: 'hi',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
