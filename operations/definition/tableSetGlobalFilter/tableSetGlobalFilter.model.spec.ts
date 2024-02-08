import { TableSetGlobalFilterOperation } from './tableSetGlobalFilter.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetGlobalFilter Tests', () => {
  it('JSON Schema snapshot', () => {
    const { schema } = generateSchemaAndValidate(TableSetGlobalFilterOperation)

    expect(schema.properties).toMatchSnapshot()
  })
})
