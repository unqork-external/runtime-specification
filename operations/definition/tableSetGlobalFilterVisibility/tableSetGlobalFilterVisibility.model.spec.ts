import { TableSetGlobalFilterVisibilityOperation } from './tableSetGlobalFilterVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetGlobalFilterVisibility Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetGlobalFilterVisibilityOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
