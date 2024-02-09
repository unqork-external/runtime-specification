import { LegacyViewWrapperComponentDefinition } from './legacyViewWrapper.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('LegacyViewWrapperDefinition Testing', () => {
  it('should ensure childType exists and has default value', () => {
    const response = generateSchemaAndValidate(LegacyViewWrapperComponentDefinition)
    expect(response.schema.properties.childType).toMatchObject({
      type: 'string',
      description: 'Child type controls which DOM elements the children components get wrapped with',
      default: 'module',
    })
  })

  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(LegacyViewWrapperComponentDefinition)

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
        const: 'legacyViewWrapper',
        description: 'Name of the type of component.',
        examples: ['legacyViewWrapper'],
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
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable information for legacyViewWrapper',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      childType: {
        type: 'string',
        default: 'module',
        description: 'Child type controls which DOM elements the children components get wrapped with',
      },
      childIds: { type: 'array', description: 'Child ids for nestable references' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
