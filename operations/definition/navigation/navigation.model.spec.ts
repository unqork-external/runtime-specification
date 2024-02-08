import { NavigationOperation } from './navigation.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Navigation Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(NavigationOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'NAVIGATION', examples: ['NAVIGATION'] },
        name: { type: 'string', description: 'Name of the operation' },
        options: { $ref: '#/definitions/NavigationOperationOptions' },
      },
      required: ['options'],
      definitions: {
        NavigationOperationOptions: {
          type: 'object',
          properties: {
            targetKey: {
              type: 'string',
              description: 'targetKey refers to the intended target to manipulate.',
              minLength: 1,
            },
            value: {
              type: 'string',
              examples: ['next', 'previous', 'draft', 'submit'],
              description: 'Value refers to what type of the action to do.',
            },
          },
          required: ['targetKey'],
        },
      },
    })
  })
})
