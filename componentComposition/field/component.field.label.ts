import { Property } from '@tsed/schema'

export class Label {
  @Property()
  text?: string
}

export class Field {
  @Property(Label)
  label: Label = new Label()
}
