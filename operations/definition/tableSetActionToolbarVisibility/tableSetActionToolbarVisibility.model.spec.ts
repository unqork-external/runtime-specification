import { TableSetActionToolbarVisibilityOperation } from './tableSetActionToolbarVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetActionToolbarVisibility Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetActionToolbarVisibilityOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
