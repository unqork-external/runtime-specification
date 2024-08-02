import { CanvasDeleteItemOperation } from './canvasDeleteItem.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasDeleteItemOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasDeleteItemOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
