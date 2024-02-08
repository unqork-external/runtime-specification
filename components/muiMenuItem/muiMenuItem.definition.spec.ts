import { MuiMenuItemComponentDefinition } from './muiMenuItem.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('MUI Menu Item Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiMenuItemComponentDefinition)

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
        const: 'muiMenuItem',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['muiMenuItem'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      adornments: {
        $ref: '#/definitions/MuiMenuItemAdornments',
      },
      validation: { $ref: '#/definitions/Validation' },
      display: {
        $ref: '#/definitions/Display',
      },
      field: {
        $ref: '#/definitions/Field',
      },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      icon: {
        description: 'Fully qualified child keys for icon nestables. Maintained by nestable api.',
        type: 'array',
      },
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
      right: {
        description: 'Fully qualified child keys for adornments in the right slot. Maintained by nestable api.',
        type: 'array',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
