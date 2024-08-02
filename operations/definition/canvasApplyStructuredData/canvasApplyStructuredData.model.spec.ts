import { CanvasApplyStructuredDataOperation } from './canvasApplyStructuredData.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasApplyStructuredDataOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasApplyStructuredDataOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
