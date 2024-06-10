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
    expect(schema).toMatchSnapshot()
  })
})
