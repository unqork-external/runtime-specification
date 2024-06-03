import { TableSetColumnVisibilityOperation } from './tableSetColumnVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnVisibility Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetColumnVisibilityOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
