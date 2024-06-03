import { TableToggleGroupingOperation } from './tableToggleGrouping.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableToggleGrouping Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableToggleGroupingOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableToggleGroupingOperationOptions: {
          properties: {
            targetKey: {
              type: 'string',
            },
          },
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
          $ref: '#/definitions/TableToggleGroupingOperationOptions',
        },
        type: {
          const: 'TABLE_TOGGLE_GROUPING',
          examples: ['TABLE_TOGGLE_GROUPING'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
