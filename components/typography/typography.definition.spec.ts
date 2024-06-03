import { TypographyComponentDefinition } from './typography.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UqTypography Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TypographyComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
