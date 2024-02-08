import { TableSetAllRowsExpandedOperation } from './tableSetAllRowsExpanded.model'
import { generateSchemaAndValidate } from '../../../../utilities'
describe('Operation Model: TableSetAllRowsExpanded Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetAllRowsExpandedOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
