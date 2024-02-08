import { CanvasApplyAllItemStateOperation } from './canvasApplyAllItemState.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasApplyAllItemStateOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasApplyAllItemStateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        CanvasApplyAllItemStateOperationOptions: {
          properties: {
            paths: {
              description:
                'Use to get structured data but only with the values from the desired paths ' + 'per canvas item state',
              examples: ['["settings.key"]'],
              type: 'array',
            },
            targetKey: {
              description: 'key of the canvas to target',
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/CanvasApplyAllItemStateOperationOptions',
        },
        type: {
          const: 'CANVAS_APPLY_ALL_ITEM_STATE',
          examples: ['CANVAS_APPLY_ALL_ITEM_STATE'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
