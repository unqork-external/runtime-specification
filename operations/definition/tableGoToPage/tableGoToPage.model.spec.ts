import { TableGoToPageOperation } from './tableGoToPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableGoToPage Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableGoToPageOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
