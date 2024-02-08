import { TableSetRowPinningOperation } from './tableSetRowPinning.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetRowPinning Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetRowPinningOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        RowPinningState: {
          properties: {
            bottom: {
              type: 'array',
            },
            top: {
              type: 'array',
            },
          },
          type: 'object',
        },
        TableSetRowPinningOperationOptions: {
          properties: {
            rowPinningState: {
              $ref: '#/definitions/RowPinningState',
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
          $ref: '#/definitions/TableSetRowPinningOperationOptions',
        },
        type: {
          const: 'TABLE_SET_ROW_PINNING',
          examples: ['TABLE_SET_ROW_PINNING'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
