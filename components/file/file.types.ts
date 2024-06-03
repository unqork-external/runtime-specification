export type UploadFile = Pick<File, 'name' | 'size' | 'type'> & {
  data: Blob
  id: string
  url: string
  storage: 'base64' | 'cloud'
}

export type FileSubmissionValue = {
  storage: string
  name: string
  size: number
  type: string
  id?: string
  url?: string
  data?: Blob
}
