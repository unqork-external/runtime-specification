import { TableSetSelectedRowOperation } from './tableSetSelectedRow.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetSelectedRow Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetSelectedRowOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        RowSelection: {
          type: 'object',
        },
        TableSetSelectedRowOperationOptions: {
          properties: {
            selectedRows: {
              $ref: '#/definitions/RowSelection',
            },
            targetKey: {
              type: 'string',
            },
          },
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/TableSetSelectedRowOperationOptions',
        },
        type: {
          const: 'TABLE_SET_SELECTED_ROW',
          examples: ['TABLE_SET_SELECTED_ROW'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
