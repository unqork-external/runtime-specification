import { TableSetColumnVisibilityOperation } from './tableSetColumnVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnVisibility Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetColumnVisibilityOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableSetColumnVisibilityOptions: {
          properties: {
            column: {
              description: 'Which column(s) are we setting visibility for?',
              type: 'object',
            },
            visibility: {
              description: 'Should this column be visible or hidden?',
              type: 'object',
            },
            targetKey: {
              type: 'string',
              minLength: 1,
              description: 'Key of the target entity',
            },
          },
          required: ['targetKey', 'column', 'visibility'],
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/TableSetColumnVisibilityOptions',
        },
        type: {
          const: 'TABLE_SET_COLUMN_VISIBILITY',
          examples: ['TABLE_SET_COLUMN_VISIBILITY'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
