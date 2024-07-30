import { SetQueryParametersOperation } from './setQueryParameters.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: SetQueryParameters Tests', () => {
  it('SetQueryParameters Model', () => {
    const { schema } = generateSchemaAndValidate(SetQueryParametersOperation)

    expect(schema).toMatchSnapshot()
  })
})
