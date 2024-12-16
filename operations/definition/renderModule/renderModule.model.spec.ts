import { RenderModuleOperation } from './renderModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: RenderModule Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(RenderModuleOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
