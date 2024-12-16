import { NavigationOperation } from './navigation.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Navigation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(NavigationOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
