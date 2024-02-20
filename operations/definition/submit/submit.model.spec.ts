import { SubmitOperation } from './submit.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Submit Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SubmitOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('should validate submit operation with all required keys', () => {
    const op = createOperation(OperationTypes.SUBMIT, {
      targetEntityKey: 'firstName',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if no targetEntityKey is provided', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.SUBMIT, {})

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
