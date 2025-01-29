import { DeletePersistedDataOperation } from './deletePersistedData.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DeletePersistedData Tests', () => {
  it('DeletePersistedData Model', () => {
    const { schema } = generateSchemaAndValidate(DeletePersistedDataOperation)

    expect(schema).toMatchSnapshot()
  })
})
