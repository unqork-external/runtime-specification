import { DynamicOperation } from './dynamic.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DynamicOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(DynamicOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
