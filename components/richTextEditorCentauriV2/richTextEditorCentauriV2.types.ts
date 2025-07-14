import { Default, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators'

export class RichTextEditorValue {
  @Optional()
  @TrimmedDescription(`The content of the Rich Text Editor.`)
  html: string | undefined = undefined
  // we don't care about the collaboration object currently, but submission from Centauri will contain it.
  @Optional()
  @TrimmedDescription(`Object that contains the change tracking, comments, and user tracking when edits are made.`)
  collaboration?: string | RichTextEditorCollaborationDetails
}

export class RichTextEditorCollaborationDetails {
  @Optional()
  @Default([])
  @TrimmedDescription(`The change tracking objects which have not been saved to the html content yet.`)
  changes: RichTextEditorChange[] = []

  @Optional()
  @Default([])
  @TrimmedDescription(`The comment threads left on the editor content.`)
  comments: RichTextEditorCommentThread[] = []

  @Optional()
  @Default([])
  @TrimmedDescription(`The users which have edited or commented on the editor content.`)
  users: RichTextEditorUser[] = []
}

export type RichTextEditorChange = {
  authorId: string
  createdAt: any
  data: any
  hasComments: boolean
  id: string
  type: string
}

export type RichTextEditorCommentThread = {
  comments: RichTextEditorComment[]
  threadId: string
}

export type RichTextEditorComment = {
  authorId: string
  commentId: string
  content: string
  createdAt: any
}

export type RichTextEditorUser = {
  avatar: any
  color: any
  id: string
  name: string
}
