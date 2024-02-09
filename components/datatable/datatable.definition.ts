import { Const, Description, DiscriminatorValue, Example, Optional, Required } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'

@DiscriminatorValue('datatable')
@Description(
  trimAll(`
    The Data Table component acts as a way to reference a collection of data, with no UI display for the end user.
    To use the Data Table component, you can manually enter or import data to store in cells arranged in columns and rows.
    Though the Data Table component doesn't display to the end-user, it's data can be found in the submission data.
  `),
)
export class DataTableDefinition extends BaseComponentDefinition {
  @Required()
  @Const('datatable')
  type: 'datatable' = 'datatable' as const

  @Required()
  @Description(
    trimAll(`
      'headers' serve as a brief descriptor or label that identify the content or category of data within a particular column. 
      A header should succinctly convey the type or purpose of the information presented in the column. 
    `),
  )
  @Example(
    ['season', 'element'],
    ['name', 'element', 'benderStatus'],
    trimAll(`
      <Example>
      Prompt: "I want to build a data table component with columns for 'name', 'age', and 'favorite color'."
      
      Response: {
        type: 'datatable',
        headers: ['name', 'age', 'favorite color']
      }    
      </Example>   
     `),
  )
  headers: string[]

  @Optional()
  @Description(
    trimAll(`
      'initialData' holds the collection of data that the Data Table is first created with, structured as an array of objects.
      Each object represents a row in the table. The keys in each object correspond to the specified 'headers', 
      and the values should then map to the corresponding cell within that object's row.
      'initialData' holds the original values of the data before any transformation takes place. 
      Values may include primitive data types or formulas. 
    `),
  )
  @Example(
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
    trimAll(`
      <Example>
      Prompt: "I want to build a data table component with columns for 'firstName', 'lastName', and 'fullName'. 
      'fullName' should be a formula that joins 'firstName' and 'lastName', with a space in the middle. 
      The initial data we have is [{ firstName: 'John', lastName: 'Doe'}, { firstName: 'Jane', lastName: 'Doe'}]."
      
      Response: {
        type: 'datatable',
        headers: ['firstName', 'lastName', 'fullName'],
        initialData: [
          { firstName: 'John', lastName: 'Doe', fullName: '=CONCAT('firstName', ' ', 'lastName')'},
          { firstName: 'Jane', lastName: 'Doe', fullName: '=CONCAT('firstName', ' ', 'lastName')'},
        ]
      }       
      </Example>  
     `),
  )
  initialData?: object[]

  @Optional()
  @Description(
    trimAll(`
      Data Table's 'value' property refers to the information held within the table after 'initialData' has been parsed and the table gets populated.  
      'value' gets populated during Data Table initialization, and when the 'EXECUTE' operation is triggered on the Data Table, as long as 'executable' is TRUE.
    `),
  )
  @Example(
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
  )
  declare value?: object[]
}
