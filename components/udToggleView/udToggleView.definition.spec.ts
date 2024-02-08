import { UdToggleViewComponentDefinition } from './udToggleView.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('UD Toggle View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdToggleViewComponentDefinition)

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
        const: 'udToggleView',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['udToggleView'],
      },
      components: {
        type: 'array',
        items: { $ref: '#/definitions/BaseComponentDefinition' },
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/UdViewBasicField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      modalIsOpen: {
        type: 'boolean',
        default: false,
        description: 'Indicates the toggle is initially open',
      },
      nestables: {
        type: 'object',
        description: 'Standard nestable implementation',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      headerAppearance: {
        type: 'string',
        description: 'Appearance represents the intended visual style and role for the toggle header.',
        enum: [
          'aside',
          'block',
          'footer',
          'header',
          'inline',
          'list-item',
          'main',
          'navigation',
          'none',
          'ordered-list',
          'section',
          'unordered-list',
        ],
        default: 'block',
      },
      headerDirection: {
        type: 'string',
        description: 'Direction represents how the header children should be disposed.',
        default: 'default',
        enum: ['horizontal', 'default', 'vertical'],
      },
      contentAppearance: {
        type: 'string',
        description: 'Appearance represents the intended visual style and role for the toggle content.',
        enum: [
          'aside',
          'block',
          'footer',
          'header',
          'inline',
          'list-item',
          'main',
          'navigation',
          'none',
          'ordered-list',
          'section',
          'unordered-list',
        ],
        default: 'block',
      },
      contentDirection: {
        type: 'string',
        description: 'Direction represents how the content children should be disposed.',
        default: 'default',
        enum: ['horizontal', 'default', 'vertical'],
      },
      childIds: { type: 'array', description: 'Child IDs for nestable references' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
