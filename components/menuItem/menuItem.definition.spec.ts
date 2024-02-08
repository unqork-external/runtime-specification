import { MenuItemComponentDefinition } from './menuItem.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Menu Item Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MenuItemComponentDefinition)

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
        const: 'menuItem',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['menuItem'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      display: { $ref: '#/definitions/Display' },
      field: { $ref: '#/definitions/Field' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable definitions for mui menu item component',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      adornments: { $ref: '#/definitions/MenuItemAdornments' },
      left: {
        type: 'array',
        description: 'Fully qualified child keys for left icon nestables. Maintained by nestable api.',
      },
      right: {
        type: 'array',
        description: 'Fully qualified child keys for right icon nestables. Maintained by nestable api.',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
