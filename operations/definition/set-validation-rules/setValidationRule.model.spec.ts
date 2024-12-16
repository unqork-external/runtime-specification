import { SetValidationRuleOperation } from './setValidationRule.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { ValidationRuleTypes } from '../../../validations'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('setValidation', () => {
  let validate, schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(SetValidationRuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match JSON schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('should validate submit operation with all required keys', () => {
    const op = createOperation(OperationTypes.SET_VALIDATION_RULE, {
      targetKey: '1',
      rule: {
        type: ValidationRuleTypes.DATE_INPUT,
      },
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should return false if validation rules are not being send', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.SET_VALIDATION_RULE, {})
    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
