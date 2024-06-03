import { ParseFormulaOperation } from './parseFormula.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import type { InputRef } from '../../../inputs/inputRef'
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
    expect(schema).toMatchSnapshot()
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
