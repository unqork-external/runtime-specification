import { Description, Property } from '@tsed/schema'

export class Label {
  @Property()
  @Description('Text displayed as the label for the field')
  text?: string
}

// TODO: Components teams => Does this "bucket" make sense to people?
//  Do we possibly want to reconsider this organization or naming?
export class Field {
  @Property(Label)
  label: Label = new Label()
}
