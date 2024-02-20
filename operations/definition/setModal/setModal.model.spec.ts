import { SetModalOperation } from './setModal.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('setModal', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetModalOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('should validate submit operation with all required keys', () => {
    const op = createOperation(OperationTypes.SET_MODAL, {
      modalAction: 'MODAL_CLOSE_KEY',
      targetEventKey: '1',
      targetKey: '1',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if no modalAction is provided', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.SET_MODAL, {})

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
