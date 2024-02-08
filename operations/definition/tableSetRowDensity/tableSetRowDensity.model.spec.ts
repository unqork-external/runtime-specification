import { generateSchemaAndValidate } from '../../../../utilities'
import { TableSetRowDensityOperation } from '../tableSetRowDensity/tableSetRowDensity.model'

describe('Operation Model: TableSetRowDensity Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetRowDensityOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableSetRowDensityOptions: {
          properties: {
            targetKey: {
              type: 'string',
              minLength: 1,
              description: 'Key of the target entity',
            },
            rowDensity: {
              description: 'The density of the rows',
              type: 'object',
            },
          },
          required: ['targetKey', 'rowDensity'],
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/TableSetRowDensityOptions',
        },
        type: {
          const: 'TABLE_SET_ROW_DENSITY',
          examples: ['TABLE_SET_ROW_DENSITY'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
