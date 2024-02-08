import { TableSetPageSizeOperation } from './tableSetPageSize.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetPageSize Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetPageSizeOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
