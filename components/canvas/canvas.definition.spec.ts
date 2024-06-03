import { CanvasComponentDefinition } from './canvas.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Canvas Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CanvasComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
