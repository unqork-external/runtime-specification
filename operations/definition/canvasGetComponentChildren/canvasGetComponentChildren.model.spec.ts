describe('Operation Model: CanvasGetComponentChildren Tests', () => {})

import { CanvasGetComponentChildrenOperation } from './canvasGetComponentChildren.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: CanvasGetComponentChildren Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasGetComponentChildrenOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        CanvasGetComponentChildrenOperationOptions: {
          properties: {
            componentId: {
              description: 'Id of the component within the canvas to get children for',
              minLength: 1,
              type: 'string',
            },
            paths: {
              description: 'Use to get data with only the specified paths per component',
              examples: ['["label", "type"]'],
              type: 'array',
            },
            targetKey: {
              description: 'Key of the canvas to target',
              minLength: 1,
              type: 'string',
            },
            shallow: {
              default: true,
              description:
                'When shallow is true, only the direct children of the component will be returned. Set to false to get nested components as well.',
              type: 'boolean',
            },
          },
          required: ['targetKey', 'componentId'],
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
          $ref: '#/definitions/CanvasGetComponentChildrenOperationOptions',
        },
        type: {
          const: 'CANVAS_GET_COMPONENT_CHILDREN',
          examples: ['CANVAS_GET_COMPONENT_CHILDREN'],
          type: 'object',
        },
      },
      required: ['type', 'options'],
      type: 'object',
    })
  })
})
