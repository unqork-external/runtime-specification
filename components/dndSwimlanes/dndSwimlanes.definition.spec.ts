import { DndSwimlanesComponentDefinition } from './dndSwimlanes.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('DndSwimlanes Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DndSwimlanesComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
