import { TableToggleGroupingOperation } from './tableToggleGrouping.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableToggleGrouping Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableToggleGroupingOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
