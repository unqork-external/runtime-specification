import { UdButtonViewComponentDefinition } from './udButtonView.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('UD Button View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdButtonViewComponentDefinition)

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
        const: 'udButtonView',
        description: 'Name of the type of component.',
        examples: ['udButtonView'],
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
      nestables: {
        type: 'object',
        description: 'Standard nestable implementation',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      direction: {
        type: 'string',
        description: 'Direction represents how the view children should be disposed.',
        default: 'vertical',
        enum: ['horizontal', 'default', 'vertical'],
      },
      draggable: { $ref: '#/definitions/UdViewDraggable' },
      childIds: { type: 'array', description: 'Child IDs for nestable references' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
