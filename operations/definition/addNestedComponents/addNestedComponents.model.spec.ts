import { AddNestedComponentsOperation } from './addNestedComponents.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('AddNestedComponentsOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AddNestedComponentsOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
