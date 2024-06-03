import { LoadModuleOperation } from './loadModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: LoadModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(LoadModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'LOAD_MODULE', examples: ['LOAD_MODULE'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/LoadModuleOperationOptions' },
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        LoadModuleOperationOptions: {
          type: 'object',
          properties: {
            moduleId: {
              type: 'string',
              description: 'Id corresponding to module that should be loaded.',
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
            collisionHandler: {
              description: 'How should module ID collisions be handled',
              type: 'string',
            },
          },
          required: ['moduleId', 'targetKey', 'targetNestable'],
        },
      },
    })
  })
})
