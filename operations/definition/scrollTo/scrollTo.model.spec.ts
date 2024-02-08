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
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: {
          type: 'string',
          const: 'SCROLL_TO',
          examples: ['SCROLL_TO'],
        },
        options: {
          $ref: '#/definitions/ScrollToOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        ScrollToOptions: {
          type: 'object',
          properties: {
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
            targetElementKey: {
              description: 'Element to scroll to',
              type: 'string',
            },
            block: {
              type: 'string',
              enum: ['start', 'center', 'end', 'nearest'],
              description: `Defines vertical alignment`,
              default: 'start',
            },
            inline: {
              type: 'string',
              enum: ['start', 'center', 'end', 'nearest'],
              description: `Defines horizontal alignment`,
              default: 'nearest',
            },
          },
        },
      },
    })
  })

  it('scrollTo should validate appropriately with a targetElementKey', () => {
    const op = createOperation(OperationTypes.SCROLL_TO, { targetElementKey: 'test' })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('scrollTo should validate appropriately without a targetElementKey', () => {
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
