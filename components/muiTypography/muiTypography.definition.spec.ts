import { MuiTypographyComponentDefinition } from './muiTypography.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('MUI Typography Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiTypographyComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
