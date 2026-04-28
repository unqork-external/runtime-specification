import { UdLogicComposerCanvasComponentDefinition } from './udLogicComposerCanvas.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UdLogicComposerCanvas Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdLogicComposerCanvasComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
