export type UploadFile = Pick<File, 'name' | 'size' | 'type'> & {
  data: Blob
  id: string
  url: string
  storage: 'base64' | 'cloud'
  // raw is needed for cloud upload
  raw?: File
  // in case we parse e.g csv files it will generate this
  json?: string
  headings?: string
}

export type FileSubmissionValue = {
  storage: string
  name: string
  size: number
  type: string
  id?: string
  url?: string
  data?: Blob
  // in case we parse e.g csv files it will generate this
  json?: string
  headings?: string
}
