import { createExamples } from '../../utilities'

export const signalExamples = createExamples({
  standardExamples: [
    {
      args: {
        inputs: {
          targetKey: 'firstName',
          propertyPath: 'value',
          required: true,
        },
      },
      id: 'firstNameWatcher',
      operations: [
        {
          type: 'PRINTER',
          options: {
            logType: 'warn',
            thingToPrint: 'firstNameWatcher operations fired: value watcher triggered',
          },
        },
      ],
      type: 'onWatch',
    },
    {
      id: 'textfieldOnBlur',
      operations: [
        {
          type: 'PRINTER',
          options: {
            logType: 'warn',
            thingToPrint: 'textfield received blur event from DOM',
          },
        },
      ],
      type: 'onBlur',
    },
  ],
  nlpExamples: [
    {
      prompt: `I want a textfield that will trigger the root execute signal on myValidationComponent
               when the textfield input receives a blur event.`,
      response: [
        {
          key: 'yourGeneratedTextfield',
          type: 'textfield',
          signals: {
            input: [
              {
                id: 'textfieldOnBlur',
                operations: [
                  {
                    type: 'EXECUTE',
                    options: {
                      targetKey: 'myValidationComponent',
                      signalTarget: 'root',
                      shouldExecute: true,
                    },
                  },
                ],
                type: 'onBlur',
              },
            ],
          },
        },
      ],
    },
  ],
})
