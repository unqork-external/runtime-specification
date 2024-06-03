import { ToggleIteratorPropertyOperation } from './toggleIteratorProperty.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ToggleIteratorProperty Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ToggleIteratorPropertyOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
