import { FetchModuleOperation } from './fetchModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: FetchModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(FetchModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'FETCH_MODULE', examples: ['FETCH_MODULE'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/FetchModuleOperationOptions' },
      },
      required: ['options'],
      definitions: {
        FetchModuleOperationOptions: {
          type: 'object',
          properties: {
            moduleId: {
              type: 'string',
              description: 'Id that identifies module to fetch',
              minLength: 1,
            },
          },
          required: ['moduleId'],
        },
      },
    })
  })
})
