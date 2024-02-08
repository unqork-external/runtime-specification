import { CanvasComponentDefinition } from './canvas.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Canvas Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CanvasComponentDefinition)

    expect(schema.required).toEqual([
      'key',
      'type',
      'canvasItems',
      'currentLayoutId',
      'layouts',
      'keyMap',
      'emptyText',
      'disabled',
      'mode',
      'childIds',
    ])
    expect(schema.properties).toEqual({
      canvasItems: {
        default: {},
        type: 'object',
      },
      childIds: {
        type: 'array',
      },
      currentLayoutId: {
        minLength: 1,
        type: 'string',
      },
      disabled: {
        default: false,
        description:
          'Boolean to determine if the canvas is disabled. ' +
          'This functionality differs from the Runtime concepts of `executable` and `interactive` in the sense that ' +
          'only some viewActions are disabled. Disabled viewActions include: ' +
          'paste, delete, deleteAll, edit, and handleDropEvent',
        type: 'boolean',
      },
      emptyText: {
        default: 'Empty',
        minLength: 1,
        type: 'string',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      executable: {
        default: true,
        description:
          'Defines whether or not the object will respond to events or fire operations. ' +
          'When `true`, the object will perform and behave as defined in its spec. ' +
          'When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      key: {
        description:
          'A user-defined key that is unique within a module. ' +
          "It doesn't have to be unique across different modules. " +
          'Objects in the runtime use keys to target other components.',
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        type: 'string',
      },
      keyMap: {
        default: {},
        type: 'object',
      },
      layouts: {
        default: {},
        type: 'object',
      },
      mode: {
        minLength: 1,
        type: 'string',
      },
      nestables: {
        description: 'Nestable information for Canvas',
        type: 'object',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      type: {
        const: 'canvas',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['canvas'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
      width: {
        type: 'number',
      },
    })
  })
})
