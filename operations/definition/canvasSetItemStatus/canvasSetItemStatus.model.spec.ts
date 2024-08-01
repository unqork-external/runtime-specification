import { CanvasSetItemStatusOperation } from './canvasSetItemStatus.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: CanvasSetItemStatus Tests', () => {
  it('CanvasSetItemStatus Model', () => {
    const { schema } = generateSchemaAndValidate(CanvasSetItemStatusOperation)

    expect(schema).toMatchSnapshot()
  })
})
