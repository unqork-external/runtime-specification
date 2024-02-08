import { TypographyComponentDefinition } from './typography.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('UqTypography Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TypographyComponentDefinition)

    expect(schema.required).toEqual(['key', 'type', 'content'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        description: 'Describes which kind of component the creator intends to build.',
        const: 'typography',
        examples: ['typography'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      validation: { $ref: '#/definitions/Validation' },
      value: {
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
        description: 'Current value of the component',
      },
      content: {
        type: 'string',
        description: 'The text content that will be rendered.',
        minLength: 1,
      },
      display: { $ref: '#/definitions/Display' },
      element: {
        type: 'object',
        description: 'The root HTML element that will wrap the content.',
        default: 'div',
      },
      styling: { $ref: '#/definitions/TypographyStyling' },
    })
  })
})
