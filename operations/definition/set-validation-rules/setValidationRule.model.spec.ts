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
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'SET_VALIDATION_RULE', examples: ['SET_VALIDATION_RULE'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/SetValidationRuleOptions' },
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SetValidationRuleOptions: {
          type: 'object',
          properties: {
            targetKey: {
              type: 'string',
              description: 'Key of target to apply set validation rule',
              minLength: 1,
            },
            rule: { $ref: '#/definitions/ValidationRule' },
          },
          required: ['targetKey'],
        },
        ValidationRule: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'What type of validation rule is this',
              enum: [
                'required',
                'maxLength',
                'minLength',
                'arrayMinLength',
                'arrayMaxLength',
                'pattern',
                'min',
                'max',
                'mask',
                'number',
                'dateinput',
                'isBeforeDate',
                'isAfterDate',
                'customError',
                'isEmail',
              ],
            },
            errorMessage: {
              type: 'string',
              description: 'What message to show when this rule is not met',
            },
            validation: { type: 'object', description: 'Nested validation record' },
          },
        },
      },
    })
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
