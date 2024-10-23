import { TableSetColumnOrderingOperation } from './tableSetColumnOrdering.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnOrdering Tests', () => {
  it('TableSetColumnOrdering Model', () => {
    const { schema } = generateSchemaAndValidate(TableSetColumnOrderingOperation)

    expect(schema).toMatchSnapshot()
  })
})
