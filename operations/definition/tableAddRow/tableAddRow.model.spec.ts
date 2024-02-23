import { TableAddRowOperation } from './tableAddRow.model'
import { generateSchemaAndValidate, trimAll } from '../../../../utilities'

describe('Operation Model: TableAddRow Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableAddRowOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        TableAddRowOperationOptions: {
          properties: {
            rowValue: {
              description: trimAll(`
                A JSON object that contains the values for the new row.
                Object keys must match existing column keys otherwise the value will be ignored.
                Value data types must match the column's component definition, i.e: if the column has a NumberComponent, trying to assign an array to it won't play nice
                If rowValue is not specified, an empty row will be added.
            `),
              examples: [
                trimAll(`
                   {
                   "Name": "AppOne",
                   "Date": "12/01/2023",
                   "Number": 123,
                    }
            `),
              ],
              type: 'object',
            },
            targetIndex: {
              description: trimAll(`
                The index where we would like to place the new row. 
                Table rows are zero index-based, meaning zero represents the first position.
                Zero, Negative and Undefined values will add the row at the top of the table and
                values larger than the number of rows will add the new row at the bottom of the table.
                This field supports interpolation.
            `),
              examples: [
                trimAll(`
                  0 - adds a row at the first position of the table
                  1000 - if the table has less than 1000 elements, it adds a row at the last position
                  -5 - adds a row at the first position of the table
                  3 - if the table has more than 3 elements, it adds a row at the position #3
            `),
              ],
              type: ['string', 'number'],
            },
            targetKey: {
              description: 'The key for the component we want to add a row',
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
          $ref: '#/definitions/TableAddRowOperationOptions',
        },
        type: {
          const: 'TABLE_ADD_ROW',
          examples: ['TABLE_ADD_ROW'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
