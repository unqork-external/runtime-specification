import { ScrollToOperation } from './scrollTo.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: ScrollTo Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ScrollToOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('scrollTo should validate appropriately with a targetElementKey in order to gracefully handle old module definitions.', () => {
    const op = createOperation(OperationTypes.SCROLL_TO, { targetElementKey: 'test' })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('scrollTo should validate appropriately with a targetKey', () => {
    const op = createOperation(OperationTypes.SCROLL_TO, { targetKey: 'test' })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('scrollTo should validate appropriately without a targetKey', () => {
    const op = createOperation(OperationTypes.SCROLL_TO, {})
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Ensure defaults are set', () => {
    const op = createOperation(OperationTypes.SCROLL_TO, {})
    expect(op.options.block).toBe('start')
    expect(op.options.inline).toBe('nearest')
  })
})
