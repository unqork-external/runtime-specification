import { TableSetFilterTypesOperation } from './tableSetFilterTypes.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetFilterTypes Tests', () => {
  it('TableSetFilterTypes Model', () => {
    const { schema } = generateSchemaAndValidate(TableSetFilterTypesOperation)

    expect(schema).toMatchSnapshot()
  })
})
