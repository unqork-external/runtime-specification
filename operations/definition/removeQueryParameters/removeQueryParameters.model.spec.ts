import { RemoveQueryParametersOperation } from './removeQueryParameters.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: RemoveQueryParameters Tests', () => {
  it('RemoveQueryParameters Model', () => {
    const { schema } = generateSchemaAndValidate(RemoveQueryParametersOperation)

    expect(schema).toMatchSnapshot()
  })
})
