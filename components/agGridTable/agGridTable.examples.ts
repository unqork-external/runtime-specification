import { createExamples } from '../../../utilities'

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

export const gridOptionsExamples = createExamples({
  standardExamples: [
    {
      defaultColDef: {
        filter: true,
      },
      columnDefs: [{ field: 'season' }, { field: 'element' }],
    },
    {
      defaultColDef: {
        filter: true,
        editable: true,
      },
      columnDefs: [{ field: 'name' }, { field: 'element' }, { field: 'benderStatus' }],
    },
  ],
})
