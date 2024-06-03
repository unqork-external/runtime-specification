import { TableAddRowOperation } from './tableAddRow.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableAddRow Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableAddRowOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
