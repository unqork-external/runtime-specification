import { SetSpinnerOperation } from './setSpinner.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Set Spinner Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetSpinnerOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Set Spinner should validate appropriately', () => {
    const op = createOperation(OperationTypes.SET_SPINNER, {
      showCursorSpinner: true,
      showPageSpinner: true,
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Ensure showCursorSpinner is set to default', () => {
    const op = createOperation(OperationTypes.SET_SPINNER, {
      showPageSpinner: true,
    })

    expect(op.options.showCursorSpinner).toBe(false)
    expect(op.options.showPageSpinner).toBe(true)
  })

  it('Ensure showPageSpinner is set to default', () => {
    const op = createOperation(OperationTypes.SET_SPINNER, {
      showCursorSpinner: true,
    })

    expect(op.options.showPageSpinner).toBe(false)
    expect(op.options.showCursorSpinner).toBe(true)
  })

  it('should not error if options are empty object', () => {
    const op = createOperation(OperationTypes.SET_SPINNER, {})

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
