import { ValidationRuleOperation } from './validateRules.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { ValidationRuleTypes } from '../../../validations'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Validate Rules', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ValidationRuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Validate rule operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.VALIDATE_RULES, {
      targetKey: 'test',
      value: '12',
      rules: [
        {
          type: ValidationRuleTypes.REQUIRED,
          validation: { required: true },
          errorMessage: 'I am required',
        },
      ],
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
