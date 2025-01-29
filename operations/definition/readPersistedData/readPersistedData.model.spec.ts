import { ReadPersistedDataOperation } from './readPersistedData.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ReadPersistedData Tests', () => {
  it('ReadPersistedData Model', () => {
    const { schema } = generateSchemaAndValidate(ReadPersistedDataOperation)

    expect(schema).toMatchSnapshot()
  })
})
