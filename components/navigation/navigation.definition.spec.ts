import { NavigationComponentDefinition } from './navigation.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Navigation Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NavigationComponentDefinition)

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
        const: 'navigation',
        description: 'Name of the type of component.',
        examples: ['navigation'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      components: {
        items: {
          $ref: '#/definitions/BaseComponentDefinition',
        },
        type: 'array',
      },
      field: { $ref: '#/definitions/NavigationField' },
      display: { $ref: '#/definitions/NavigationDisplay' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable information for navigation',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      navigationData: {
        type: 'array',
        items: { $ref: '#/definitions/NavigationData' },
        description: 'All the navigation settings for individual pages in the component',
      },
      options: { $ref: '#/definitions/NavigationOptions' },
      errors: { $ref: '#/definitions/NavigationErrors' },
      childIds: { type: 'array', description: 'Child ids for nestable references' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
