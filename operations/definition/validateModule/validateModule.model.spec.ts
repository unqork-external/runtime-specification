import { ValidateModuleOperation } from './validateModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: ValidateModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ValidateModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Validate operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.VALIDATE_MODULE, {
      targetKey: 'd',
      moduleId: 'MODULE',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
