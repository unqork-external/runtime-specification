import { TableClearOperation } from './tableClear.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableClear Tests', () => {
  let validate, schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(TableClearOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableClearOperationOptions: {
          properties: {
            targetKey: {
              description: 'key of the table to apply the clear operation',
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
          $ref: '#/definitions/TableClearOperationOptions',
        },
        type: {
          const: 'TABLE_CLEAR',
          examples: ['TABLE_CLEAR'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
