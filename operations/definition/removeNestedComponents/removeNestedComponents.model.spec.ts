import { RemoveNestedComponentsOperation } from './removeNestedComponents.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: RemoveNestedComponentsOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(RemoveNestedComponentsOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
