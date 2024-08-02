import { CanvasApplyAllItemStateOperation } from './canvasApplyAllItemState.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasApplyAllItemStateOperation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasApplyAllItemStateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
