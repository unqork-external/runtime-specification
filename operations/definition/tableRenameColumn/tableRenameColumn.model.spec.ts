import { TableRenameColumnOperation } from './tableRenameColumn.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableRenameColumn Tests', () => {
  it('TableRemoveColumn Model', () => {
    const { schema } = generateSchemaAndValidate(TableRenameColumnOperation)

    expect(schema).toMatchSnapshot()
  })
})
