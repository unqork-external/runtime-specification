/* eslint-disable max-len */
import { IconComponentDefinition } from './icon.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Icon Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(IconComponentDefinition)

    expect(schema.required).toEqual(['key', 'type', 'sourceType', 'source'])
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
        description: 'Name of the type of component.',
        type: 'string',
        minLength: 1,
        const: 'icon',
        examples: ['icon'],
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
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      sourceType: {
        type: 'string',
        description:
          'sourceType determines how the icon is sourced. If url, a valid url must also be defined in source.',
        enum: ['fontAwesome', 'url', 'css'],
        minLength: 1,
      },
      source: {
        type: 'string',
        description:
          'String representing the source of the icon. For url, this should be a fully qualified url to the hosted icon image. For fontAwesome, this should be a string describing the fontAwesome classes. For cssIcon, this string should be the css class definitions to apply.',
        minLength: 1,
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
