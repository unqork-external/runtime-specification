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
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: {
          type: 'string',
          const: 'SET_SPINNER',
          examples: ['SET_SPINNER'],
        },
        options: {
          $ref: '#/definitions/SetSpinnerOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SetSpinnerOptions: {
          type: 'object',
          properties: {
            showCursorSpinner: {
              type: 'boolean',
              description: `'showCursorSpinner' converts the user's cursor to a spinner when enabled.`,
              default: false,
            },
            showPageSpinner: {
              type: 'boolean',
              description: `'showPageSpinner' uses the R1 Page Spinner animation when enabled.`,
              default: false,
            },
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
          },
        },
      },
    })
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
