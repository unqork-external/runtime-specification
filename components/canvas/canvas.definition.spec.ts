import { CanvasComponentDefinition, CanvasComponentState } from './canvas.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Canvas Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(CanvasComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(CanvasComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
