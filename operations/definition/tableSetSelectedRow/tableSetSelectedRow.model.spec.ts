import { TableSetSelectedRowOperation } from './tableSetSelectedRow.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetSelectedRow Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetSelectedRowOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
