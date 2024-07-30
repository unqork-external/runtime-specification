import { AddQueryParametersOperation } from './addQueryParameters.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: AddQueryParameters Tests', () => {
  it('AddQueryParameters Model', () => {
    const { schema } = generateSchemaAndValidate(AddQueryParametersOperation)

    expect(schema).toMatchSnapshot()
  })
})
