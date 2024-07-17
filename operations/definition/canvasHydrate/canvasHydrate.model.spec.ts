import { CanvasHydrateOperation } from './canvasHydrate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('CanvasHydrateOperation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasHydrateOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
