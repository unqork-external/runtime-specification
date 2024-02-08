import { RenderModuleOperation } from './renderModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: RenderModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(RenderModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'RENDER_MODULE', examples: ['RENDER_MODULE'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/RenderModuleOperationOptions' },
      },
      required: ['options'],
      definitions: {
        RenderModuleOperationOptions: {
          type: 'object',
          properties: {
            moduleId: {
              type: 'string',
              description: 'Id corresponding to loaded module that should be rendered.',
              minLength: 1,
            },
            targetKey: {
              type: 'string',
              description: 'Target Key identifying component in which the module should be rendered.',
              minLength: 1,
            },
            targetNestable: {
              type: 'string',
              description: 'Name of the nestable in which the module should be rendered.',
              minLength: 1,
            },
          },
          required: ['moduleId', 'targetKey', 'targetNestable'],
        },
      },
    })
  })
})
