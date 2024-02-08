import { TableSortByColumnOperation } from './tableSortByColumn.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSortByColumn Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSortByColumnOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableSortByColumnOperationOptions: {
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/TableSortByColumnOperationOptions',
        },
        type: {
          const: 'TABLE_SORT_BY_COLUMN',
          examples: ['TABLE_SORT_BY_COLUMN'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
