import { TableSetGroupingCriteriaOperation } from './tableSetGroupingCriteria.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetGroupingCriteria Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetGroupingCriteriaOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableSetGroupingCriteriaOperationOptions: {
          properties: {
            groupBy: {
              type: 'object',
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
          $ref: '#/definitions/TableSetGroupingCriteriaOperationOptions',
        },
        type: {
          const: 'TABLE_SET_GROUPING_CRITERIA',
          examples: ['TABLE_SET_GROUPING_CRITERIA'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
