import { TableGoToFirstPageOperation } from './tableGoToFirstPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableGoToFirstPage Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableGoToFirstPageOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
