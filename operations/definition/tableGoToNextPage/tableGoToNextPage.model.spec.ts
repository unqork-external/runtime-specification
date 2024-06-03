import { TableGoToNextPageOperation } from './tableGoToNextPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableGoToNextPage Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableGoToNextPageOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
