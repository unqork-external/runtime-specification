import { TableRemoveRowsOperation } from './tableRemoveRows.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableRemoveRows Tests', () => {
  it('TableRemoveRows Model', () => {
    const { schema } = generateSchemaAndValidate(TableRemoveRowsOperation)

    expect(schema).toMatchSnapshot()
  })
})
