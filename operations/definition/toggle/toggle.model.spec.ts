import { ToggleOperation } from './toggle.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ToggleOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ToggleOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
