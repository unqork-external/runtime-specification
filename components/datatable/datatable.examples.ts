import { createExamples } from '../../../utilities'

export const headersExamples = createExamples({
  standardExamples: [
    ['season', 'element'],
    ['name', 'element', 'benderStatus'],
  ],
  nlpExamples: [
    {
      prompt: 'I want to build a data table component with columns for name, age, and favorite color.',
      response: {
        type: 'datatable',
        headers: ['name', 'age', 'favorite color'],
      },
    },
  ],
})

export const initialDataExamples = createExamples({
  standardExamples: [
    [
      {
        season: 'winter',
        element: 'water',
      },
      {
        season: 'spring',
        element: 'air',
      },
      {
        season: 'summer',
        element: 'fire',
      },
      {
        season: 'fall',
        element: 'earth',
      },
    ],
    [
      {
        name: 'Katara',
        element: 'water',
        benderStatus: '=BOOLEAN(element)',
      },
      {
        name: 'Aang',
        element: 'air',
        benderStatus: '=BOOLEAN(element)',
      },
      {
        name: 'Zuko',
        element: 'fire',
        benderStatus: '=BOOLEAN(element)',
      },
      {
        name: 'Toph',
        element: 'earth',
        benderStatus: '=BOOLEAN(element)',
      },
      {
        name: 'Sokka',
        benderStatus: '=BOOLEAN(element)',
      },
    ],
  ],
  nlpExamples: [
    {
      prompt: `I want to build a data table component with columns for 'firstName', 'lastName', and 'fullName'. 
      'fullName' should be a formula that joins 'firstName' and 'lastName', with a space in the middle.
      The initial data we have is [{ firstName: 'John', lastName: 'Doe'}, { firstName: 'Jane', lastName: 'Doe'}].`,
      response: {
        type: 'datatable',
        headers: ['firstName', 'lastName', 'fullName'],
        initialData: [
          { firstName: 'John', lastName: 'Doe', fullName: "=CONCAT('firstName', ' ', 'lastName')" },
          { firstName: 'Jane', lastName: 'Doe', fullName: "=CONCAT('firstName', ' ', 'lastName')" },
        ],
      },
    },
  ],
})

export const valueExamples = createExamples({
  standardExamples: [
    [
      {
        season: 'winter',
        element: 'water',
      },
      {
        season: 'spring',
        element: 'air',
      },
      {
        season: 'summer',
        element: 'fire',
      },
      {
        season: 'fall',
        element: 'earth',
      },
    ],
    [
      {
        name: 'Katara',
        element: 'water',
        benderStatus: true,
      },
      {
        name: 'Aang',
        element: 'air',
        benderStatus: true,
      },
      {
        name: 'Zuko',
        element: 'fire',
        benderStatus: true,
      },
      {
        name: 'Toph',
        element: 'earth',
        benderStatus: true,
      },
      {
        name: 'Sokka',
        element: '',
        benderStatus: false,
      },
    ],
  ],
})
