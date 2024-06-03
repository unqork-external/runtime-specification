import { createExamples } from '../../utilities'

// TODO: Update with Signals examples (and lots of them!) when Signals are merged in
export const eventHandlersExamples = createExamples({
  standardExamples: [
    {
      eventHandlers: {
        BLUR: {
          operations: [
            {
              type: 'EXECUTE',
              options: {
                targetKey: 'a different object',
              },
            },
          ],
        },
      },
    },
  ],
  nlpExamples: [
    {
      prompt: 'I want to be able to click on a button to disable a textfield.',
      response: [
        {
          key: 'yourGeneratedButton',
          type: 'button',
          eventHandlers: {
            ON_CLICK: {
              operations: [
                {
                  type: 'SET_PROPERTY',
                  options: {
                    targetKey: 'yourGeneratedTextfield',
                    property: 'display.interactive',
                    value: false,
                  },
                },
              ],
            },
          },
        },
        {
          key: 'yourGeneratedTextfield',
          type: 'textfield',
        },
      ],
    },
  ],
})
