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
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: {
          type: 'string',
          const: 'SET_PROPERTY',
          examples: ['SET_PROPERTY'],
        },
        options: {
          $ref: '#/definitions/SetPropertyOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SetPropertyOptions: {
          type: 'object',
          properties: {
            targetKey: {
              type: 'string',
              description:
                '`targetKey` refers to the intended target to manipulate. Can work on an array of targetKeys as well.',
              examples: ['firstNameTextField', 'grid.row(0).col(0)'],
              minLength: 1,
            },
            property: {
              type: 'string',
              description:
                '`property` refers to the intended property to mutate. This can be represented as a JSONPath expression.',
              examples: ['value', 'validation.latest'],
              minLength: 1,
            },
            value: {
              type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
              description: 'The value refers to the intended value to mutate the intended property to.',
            },
            shouldOverwrite: {
              type: 'boolean',
              description:
                //eslint-disable-next-line max-len
                "shouldOverwrite refers to the type of behavior that SET_PROPERTY should emulate. If true, SET_PROPERTY will overwrite the value located at the intended property of the target regardless of if the intended property is set. If false, SET_PROPERTY will check if the property's value is set, and if so, SET_PROPERTY will exit.",
              default: true,
            },
          },
          description:
            //eslint-disable-next-line max-len
            'SET_PROPERTY will mutate a specific property on a specific target to a specific value. Optionally, if shouldOverwrite is set to false and if a value is already existing on the targeted property, then the Operation will do nothing and exit.',
          required: ['targetKey', 'property'],
        },
      },
    })
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
