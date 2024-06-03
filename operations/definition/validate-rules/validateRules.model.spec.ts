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
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/ValidateRulesOptions',
        },
        type: {
          const: 'VALIDATE_RULES',
          examples: ['VALIDATE_RULES'],
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      definitions: {
        ValidateRulesOptions: {
          properties: {
            rules: {
              description: 'A list of validation rules.',
              examples: [
                [
                  {
                    errorMessage: 'I am required',
                    type: 'required',
                    validation: {
                      required: true,
                    },
                  },
                ],
              ],
              items: {
                $ref: '#/definitions/ValidationRule',
              },
              type: 'array',
            },
            targetKey: {
              description: 'targetKey refers to the intended target for an operation.',
              examples: ['firstNameTextField'],
              minLength: 1,
              type: 'string',
            },
            value: {
              description: 'Value to be validated with different types of validation handlers.',
              type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
            },
          },
          required: ['targetKey', 'rules'],
          type: 'object',
        },
        ValidationRule: {
          type: 'object',
          properties: {
            errorMessage: {
              description: 'What message to show when this rule is not met',
              type: 'string',
            },
            type: {
              description: 'What type of validation rule is this',
              type: 'string',
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
            validation: {
              description: 'Nested validation record',
              type: 'object',
            },
          },
        },
      },
      required: ['options'],
    })
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
