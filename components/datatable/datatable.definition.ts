import { Const, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { headersExamples, initialDataExamples, valueExamples } from './datatable.examples'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'

@DiscriminatorValue('datatable')
@TrimmedDescription(`
  The Data Table component acts as a way to reference a collection of data, with no UI display for the end user.
  To use the Data Table component, you can manually enter or import data to store in cells arranged in columns and rows.
  Though the Data Table component doesn't display to the end-user, it's data can be found in the submission data.
`)
export class DataTableDefinition extends BaseComponentDefinition {
  @Required()
  @Const('datatable')
  type: 'datatable' = 'datatable' as const

  @Required()
  @TrimmedDescription(`
    'headers' serve as a brief descriptor or label that identify the content or category of data within a particular column. 
    A header should succinctly convey the type or purpose of the information presented in the column. 
  `)
  @Examples(headersExamples)
  headers: string[]

  @Optional()
  @TrimmedDescription(`
    'initialData' holds the collection of data that the Data Table is first created with, structured as an array of objects.
    Each object represents a row in the table. The keys in each object correspond to the specified 'headers', 
    and the values should then map to the corresponding cell within that object's row.
    'initialData' holds the original values of the data before any transformation takes place. 
    Values may include primitive data types or formulas. 
  `)
  @Examples(initialDataExamples)
  initialData?: object[]

  @Optional()
  @TrimmedDescription(`
    Data Table's 'value' property refers to the information held within the table after 'initialData' has been parsed and the table gets populated.  
    'value' gets populated during Data Table initialization, and when the 'EXECUTE' operation is triggered on the Data Table, as long as 'executable' is TRUE.
  `)
  @Examples(valueExamples)
  declare value?: object[]
}
