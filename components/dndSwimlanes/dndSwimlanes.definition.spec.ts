import { DndSwimlanesComponentDefinition } from './dndSwimlanes.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('DndSwimlanes Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DndSwimlanesComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      display: {
        $ref: '#/definitions/DndSwimlanesDisplay',
      },
      cardData: {
        type: 'array',
        description: 'When initialData comes in, we parse and set that to cardData for future use.',
      },
      displayCards: {
        default: [],
        type: 'object',
        description: 'Nested child IDs for rendering.',
      },
      eventHandlers: {
        $ref: '#/definitions/DndSwimlanesEvents',
        description: 'An object that represents a Runtime Event and the associated behavior.',
        type: 'object',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: {
        $ref: '#/definitions/DndSwimlanesField',
      },
      swimlaneDefs: {
        description: 'The data to use for the Swimlane columns definitions.',
        type: 'array',
      },
      initialData: {
        description: 'Other Components can set this value to be the initial data for the Swimlanes.',
        type: 'object',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      interactions: {
        $ref: '#/definitions/Interactions',
      },
      key: {
        description:
          // eslint-disable-next-line max-len
          "A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.",
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        type: 'string',
      },
      nestables: {
        $ref: '#/definitions/NestableDef',
      },
      options: {
        $ref: '#/definitions/DndSwimlanesOptions',
      },
      styling: {
        $ref: '#/definitions/DndSwimlanesStyling',
      },
      swimlanesCardData: {
        default: {},
        description: 'The parsed, grouped JSON source data formatted into Swimlanes Data for the view.',
        type: 'object',
      },
      type: {
        const: 'dndSwimlanes',
        description: 'Name of the type of component.',
        examples: ['dndSwimlanes'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'The values that will be in the list.',
        items: {
          default: [],
        },
        type: 'array',
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
    })
  })
})
