import { RenderModuleOperation } from './renderModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: RenderModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(RenderModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
