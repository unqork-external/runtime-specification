import { SetPersistedDataOperation } from './setPersistedData.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: SetPersistedData Tests', () => {
  it('SetPersistedData Model', () => {
    const { schema } = generateSchemaAndValidate(SetPersistedDataOperation)

    expect(schema).toMatchSnapshot()
  })
})
