import { TableSetColumnPinningOperation } from './tableSetColumnPinning.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnPinning Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetColumnPinningOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        ColumnPinningState: {
          properties: {
            left: {
              type: 'array',
            },
            right: {
              type: 'array',
            },
          },
          type: 'object',
        },
        TableSetColumnPinningOperationOptions: {
          properties: {
            columnPinningState: {
              $ref: '#/definitions/ColumnPinningState',
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
          $ref: '#/definitions/TableSetColumnPinningOperationOptions',
        },
        type: {
          const: 'TABLE_SET_COLUMN_PINNING',
          examples: ['TABLE_SET_COLUMN_PINNING'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
