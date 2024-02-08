import { CanvasApplyStructuredDataOperation } from './canvasApplyStructuredData.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasApplyStructuredDataOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasApplyStructuredDataOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        CanvasApplyStructuredDataOperationOptions: {
          properties: {
            layoutId: {
              default: 'root',
              description: 'the id of layout you want to start collecting from',
              examples: ['root'],
              type: 'string',
            },
            paths: {
              description: 'Use to get structured data but only with the values from the desired paths per component',
              examples: ['["key"]'],
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
          $ref: '#/definitions/CanvasApplyStructuredDataOperationOptions',
        },
        type: {
          const: 'CANVAS_APPLY_STRUCTURED_DATA',
          examples: ['CANVAS_APPLY_STRUCTURED_DATA'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
