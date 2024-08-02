import { NavigationOperation } from './navigation.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Navigation Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(NavigationOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
