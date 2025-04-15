import { AddNestedComponentsOperation } from './addNestedComponents.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('AddNestedComponentsOperation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AddNestedComponentsOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
