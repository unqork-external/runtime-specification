import { createExamples } from '../../../utilities'

export const multiSelectOptionModelExamples = createExamples({
  standardExamples: [{ label: 'a', value: 'a' }],
  nlpExamples: [
    {
      prompt: 'I want to build a component with selected operation',
      response: {
        type: 'operationsBuilder',
        selectedOperation: { label: 'a', value: 'a' },
      },
    },
  ],
})
