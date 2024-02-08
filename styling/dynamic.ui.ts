/*
  Ui States defined on the asset level
*/
export type DynamicUIState = { id: string; type: string; label: string }
/*
Media types defined on an asset level

   {
    "id": "mobile",
    "label": "mobile label",
    "value": "600px",
    "type": "max-width"
  }

The dynamic UI manager will uses this to build media queries

`@media (${screen.type}: ${screen.value})`
*/
export type DynamicUIScreen = { id: string; label: string; value: string; type: string }
export type DynamicUI<States extends string = string, Screens extends string = string> = {
  classes: Record<States | Screens, any>
  classIds: string[]
  screens: DynamicUIScreen[]
  states: DynamicUIState[]
  currentUIState: States
  inlineStyles: Record<string, any>
}
