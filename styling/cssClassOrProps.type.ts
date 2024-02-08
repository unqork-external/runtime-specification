import type { css } from '@emotion/css'

export type CssClassOrProps = CssProps | CssClassString

// This would be a className string like:
//  .MyOwnClass
type CssClassString = string

// Emotion has already defined styling objects ahead of time for us to use for our own typing.
// Very nice resource.
type CssProps = Parameters<typeof css>
