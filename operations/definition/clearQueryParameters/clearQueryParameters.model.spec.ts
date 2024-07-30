import { ClearQueryParametersOperation } from './clearQueryParameters.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ClearQueryParameters Tests', () => {
  it('ClearQueryParameters Model', () => {
    const { schema } = generateSchemaAndValidate(ClearQueryParametersOperation)

    expect(schema).toMatchSnapshot()
  })
})
