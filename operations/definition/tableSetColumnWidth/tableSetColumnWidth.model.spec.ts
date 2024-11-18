import { TableSetColumnWidthOperation } from './tableSetColumnWidth.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetColumnWidth Tests', () => {
  it('TableSetColumnWidth Model', () => {
    const { schema } = generateSchemaAndValidate(TableSetColumnWidthOperation)

    expect(schema).toMatchSnapshot()
  })
})
