import { TableGoToLastPageOperation } from './tableGoToLastPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableGoToLastPage Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableGoToLastPageOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
