import { DragContextComponentDefinition } from './dragContext.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Drag Context Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DragContextComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
