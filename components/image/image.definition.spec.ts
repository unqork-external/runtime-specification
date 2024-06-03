import { ImageComponentDefinition } from './image.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Image Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ImageComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
