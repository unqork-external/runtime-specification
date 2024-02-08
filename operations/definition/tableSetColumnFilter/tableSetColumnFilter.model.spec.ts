import { TableSetColumnFilterOperation } from './tableSetColumnFilter.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnFilter Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetColumnFilterOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
