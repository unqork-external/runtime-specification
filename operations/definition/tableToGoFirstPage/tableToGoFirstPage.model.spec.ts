import { TableToGoFirstPageOperation } from './tableToGoFirstPage.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableToGoFirstPage Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableToGoFirstPageOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
