import { GoGoGadgetClipboardOperation } from './goGoGadgetClipboard.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: GoGoGadgetClipboard Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(GoGoGadgetClipboardOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match the basic schema', () => {
    expect(schema).toEqual({
      definitions: {
        GoGoGadgetClipboardOperationOptions: {
          properties: {
            property: {
              minLength: 1,
              type: 'string',
            },
            targetKey: {
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey', 'property'],
          type: 'object',
        },
      },
      properties: {
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/GoGoGadgetClipboardOperationOptions',
        },
        type: {
          const: 'GO_GO_GADGET_CLIPBOARD',
          examples: ['GO_GO_GADGET_CLIPBOARD'],
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
