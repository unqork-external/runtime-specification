import { CanvasHydrateOperation } from './canvasHydrate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasHydrateOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasHydrateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        CanvasHydrateOperationOptions: {
          properties: {
            definitions: {
              description:
                'An array or an an a array in the for of a string of component definitions to hydrate the canvas',
              type: 'object',
            },
            targetKey: {
              description: 'key of the canvas to hydrate',
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey', 'definitions'],
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
          $ref: '#/definitions/CanvasHydrateOperationOptions',
        },
        type: {
          const: 'CANVAS_HYDRATE',
          examples: ['CANVAS_HYDRATE'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
