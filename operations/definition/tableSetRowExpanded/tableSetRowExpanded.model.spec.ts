import { TableSetRowExpandedOperation } from './tableSetRowExpanded.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetRowExpanded Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetRowExpandedOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
