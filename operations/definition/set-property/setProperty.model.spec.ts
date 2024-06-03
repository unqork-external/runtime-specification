import { SetPropertyOperation } from './setProperty.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Set Property Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetPropertyOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Set Property should validate appropriately', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'name1',
      value: 'test',
      property: 'value',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Ensure shouldOverwrite is set to default - also ensure optional keys are set.', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'name1',
      value: 'test',
      property: 'value',
    })

    expect(op.options.shouldOverwrite).toBe(true)
  })

  it('should error if targetKey is blank', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: '',
      value: 'something',
      property: 'value',
    })

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })

  it('should error if property is blank', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'firstName',
      value: 'something',
      property: '',
    })

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })

  it('should not error if value is blank', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'firstName',
      value: '',
      property: 'property',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should not error if value is null', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'firstName',
      value: null,
      property: 'property',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should not error if value is undefined', () => {
    const op = createOperation(OperationTypes.SET_PROPERTY, {
      targetKey: 'firstName',
      value: undefined,
      property: 'property',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
