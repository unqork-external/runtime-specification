import { PreviewBarComponentDefinition } from './previewBar.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('PreviewBarDefinition Testing', () => {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PreviewBarComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure childType exists and has default value', () => {
    const response = generateSchemaAndValidate(PreviewBarComponentDefinition)
    expect(response.schema.properties.collapsed).toMatchObject({
      type: 'boolean',
      description: 'Controls if the preview bar is collapsed against the top or not',
      default: false,
    })
    expect(response.schema.properties.roles).toMatchObject({
      type: 'array',
      description: 'List of roles that can be assumed',
      items: {
        default: [],
      },
    })
    expect(response.schema.properties.styles).toMatchObject({
      type: 'array',
      description: 'List styles that can be previewed',
      items: {
        default: [],
      },
    })
  })
})
