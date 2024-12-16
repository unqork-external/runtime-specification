import { AutocompleteOperation } from './autocomplete.model'
import { generateSchemaAndValidate } from '../../../../utilities/generateSchemaAndValidate/generateSchemaAndValidate'

describe('Operation Model: Autocomplete Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AutocompleteOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
