# Runtime Specification

___
**_An open-source, codeless specification for representing enterprise-grade Unqork applications
spanning user interfaces, business logic, & data management. The JSON-based standard powering Unqork's codeless ecosystem._**

## Overview

The Runtime Specification repository holds the models for every potential interface that is currently recognized by Vega Runtime.


JSON-based interfaces allow creators to build complex applications by describing module appearance and behavior. 
The goal of the specification is to provide a flexible way to define applications through JSON specifications instead of traditional code, enabling a modular and dynamic approach to application development.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)
- [Example Component Model](#example-component-model)
- [Contributing](#contributing)
- [License](#license)

### Dependencies
The Runtime Specification relies on the following dependencies:

[//]: # (TODO - fill this out)

## Usage
Here's a basic example of a JSON-based component configuration that adheres to the spec:

```json
{
  "key": "exampleComponent99",
  "type": "example",
  "eventHandlers": {
    "ON_CLICK": {
      "operations": [
        {
          "type": "SET_PROPERTY",
          "options": {
            "target": "myConfettiComponent",
            "property": "hideConfetti",
            "value": false
          }
        }
      ]
    }
  },
  "exampleSpecificProperties": {
    "superSpecificToExample": true
  },
  "styling": {
    "targets": {
      "root": ["component-class-99", {"borderStyle": "dotted"}]
    }
  }
}
```


## Components
All component models must extend the `BaseComponentDefinition`. 

Current base component interface (Version 2.x.x.x-alpha):

```typescript
class BaseComponentDefinition extends RootObject {
  key: string
  type: string
  executable?: boolean = true
  eventHandlers?: ComponentEventHandlers
  watchers?: Watcher[]
  inputs?: InputRef[]
  styling?: StylingModel<any>
  validation?: Validation
  value?: unknown
}
```

### Example Component Model
Component models can be defined as simple TypeScript classes that leverage Ts.ED Schema decorators for schema generation.
Here's an example of how a component model could look:

```typescript
import { Description } from "@tsed/schema"

@DiscriminatorValue('example')
export class ExampleComponentDefinition extends BaseComponentDefinition {
  @Required()
  @Description('This is an example component.')
  type: 'example' = 'example' as const

  @Description('The enabled styling targets model for an example component.')
  styling: ExampleStylingModel

  @Description()
  @Description('The example specific properties bucket is where you can find details related to an example component.')
  exampleSpecificProperties = new ExampleSpecificProperties()
}

class ExampleSpecificProperties {
  @Default(false)
  @Description('This property does something super specific to an example component!')
  superSpecificToExample: boolean = false
}

class ExampleStylingModel {
  targets: ExampleStyleTargets
}

class ExampleStyleTargets {
  @Css()
  [ExampleTargetsEnum.root]: CssClassOrProps
}
```

### Contributing
Contributions to this repository are currently not accepted. We appreciate feedback and suggestions through the issue tracker.

### License
**All files in this repository are made available under the AGPLv3 license.** Refer to [LICENSE.md](LICENSE.md) for details. 

### Custom Licensing
Unqork recognizes that this repository's AGPLv3 license may not suit all enterprise needs. 
If you require a custom license for your organization's use of this software, please contact us 
at runtime@unqork.com to explore options available.