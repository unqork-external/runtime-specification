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
    expect(schema).toMatchSnapshot()
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
