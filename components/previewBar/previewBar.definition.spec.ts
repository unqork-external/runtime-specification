import { PreviewBarComponentDefinition } from './previewBar.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('PreviewBarDefinition Testing', () => {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PreviewBarComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'previewBar',
        description: 'Name of the type of component.',
        examples: ['previewBar'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      roles: {
        type: 'array',
        items: { default: [] },
        description: 'List of roles that can be assumed',
      },
      styles: {
        type: 'array',
        items: { default: [] },
        description: 'List styles that can be previewed',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      collapsed: {
        type: 'boolean',
        default: false,
        description: 'Controls if the preview bar is collapsed against the top or not',
      },
    })
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
