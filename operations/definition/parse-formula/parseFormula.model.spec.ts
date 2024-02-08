import { ParseFormulaOperation } from './parseFormula.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { InputRef } from '../../../modules'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('parseFormula operation', () => {
  let validate, schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(ParseFormulaOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match JSON schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'PARSE_FORMULA', examples: ['PARSE_FORMULA'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/ParseFormulaOptions' },
      },
      required: ['options'],
      definitions: {
        ParseFormulaOptions: {
          type: 'object',
          properties: {
            targetKey: {
              type: 'string',
              description: `The target must to be a the string reference of the input that will receive the result of the formula operation over the array of reference inputs provided`,
              minLength: 1,
            },
            inputs: {
              type: 'array',
              items: { $ref: '#/definitions/InputRef' },
              description: 'Inputs must to have references to inputs that will be used by the formula',
            },
            formula: {
              type: 'string',
              description: 'Formula that will be applied',
              minLength: 1,
              examples: ['Some examples we can use: [ "=CONCATENATE(A,B)", "=A*5", "=GET(A, `MyParam`)" ]'],
            },
            property: {
              type: 'string',
              description: 'Property that will receive the final value after parsing the formula',
              minLength: 1,
              default: 'value',
            },
          },
          required: ['targetKey', 'formula', 'property'],
        },
        InputRef: {
          type: 'object',
          properties: {
            targetKey: { type: 'string', minLength: 1 },
            propertyPath: { type: 'string' },
            alias: { type: 'string' },
            required: { type: 'boolean' },
            silent: { type: 'boolean' },
            type: { type: 'string' },
          },
          required: ['targetKey'],
        },
      },
    })
  })

  it('should validate submit operation with all keys', () => {
    const op = createOperation(OperationTypes.PARSE_FORMULA, {
      targetKey: 'dropdown',
      inputs: [
        {
          targetKey: 'dtColors',
          propertyPath: 'value',
        } as InputRef,
        {
          targetKey: 'dtColors',
          propertyPath: 'value',
        } as InputRef,
      ],
      formula: '=dtColors',
      property: 'options.rawValues',
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('validation should fail if not required properties are provided', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.PARSE_FORMULA, {})
    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
