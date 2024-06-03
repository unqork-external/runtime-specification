import { TableGoToPreviousPageOperation } from './tableGoToPreviousPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableGoToPreviousPage Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableGoToPreviousPageOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
