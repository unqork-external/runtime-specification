import type { css } from '@emotion/css'
import type { ArrayValues } from 'type-fest'

export type CssClassOrProps = CssProps | CssClassString

// This would be a className string like:
//  .MyOwnClass
type CssClassString = string

// Emotion has already defined styling objects ahead of time for us to use for our own typing.
// Very nice resource.
export type CssProps = ArrayValues<Parameters<typeof css>>
