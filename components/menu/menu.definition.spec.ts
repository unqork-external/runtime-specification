import { MenuComponentDefinition } from './menu.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Menu Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MenuComponentDefinition)

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
      temporaryAnchorKey: {
        description: [
          'Temporary anchor key to override where a menu should open.',
          'Used to position relative to a specific element as part of an operation',
        ].join(' '),
        type: 'string',
      },
      type: {
        type: 'string',
        minLength: 1,
        description: 'Component type.',
        const: 'menu',
        examples: ['menu'],
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
      nestables: {
        type: 'object',
        description: 'Nestable definitions for menu component',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      items: {
        type: 'array',
        items: { $ref: '#/definitions/BaseComponentDefinition' },
        description: 'Nested component definition.',
      },
      open: {
        type: 'boolean',
        description: 'If `open` is true, the menu should be in its open state.',
        default: false,
      },
      anchorKey: {
        type: 'string',
        description: '`anchorKey` refers to where the Menu should appear on the screen.',
      },
      itemKeys: {
        type: 'array',
        description: 'Fully qualified child keys for items nestables. Maintained by nestable api.',
      },
      styling: {
        $ref: '#/definitions/MenuStyling',
      },
    })
  })
})
