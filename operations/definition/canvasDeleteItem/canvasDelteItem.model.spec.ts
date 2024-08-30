import { CanvasDeleteItemOperation } from './canvasDeleteItem.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasDeleteItemOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasDeleteItemOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        CanvasDeleteItemOperationOptions: {
          properties: {
            canvasItemId: {
              description: 'the id of canvas item to delete',
              minLength: 1,
              type: 'string',
            },
            targetKey: {
              description: 'key of the canvas to target',
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey', 'canvasItemId'],
          type: 'object',
        },
      },
      properties: {
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/CanvasDeleteItemOperationOptions',
        },
        type: {
          const: 'CANVAS_DELETE_ITEM',
          examples: ['CANVAS_DELETE_ITEM'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
