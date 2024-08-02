describe('Operation Model: CanvasGetComponentChildren Tests', () => {})

import { CanvasGetComponentChildrenOperation } from './canvasGetComponentChildren.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: CanvasGetComponentChildren Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(CanvasGetComponentChildrenOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
