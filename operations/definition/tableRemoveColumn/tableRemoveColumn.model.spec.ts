import { TableRemoveColumnOperation } from './tableRemoveColumn.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableRemoveColumn Tests', () => {
  it('TableRemoveColumn Model', () => {
    const { schema } = generateSchemaAndValidate(TableRemoveColumnOperation)

    expect(schema).toMatchSnapshot()
  })
})
