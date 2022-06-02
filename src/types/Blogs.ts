import { UploadImageType } from './UploadImage'

export type BlogResponse = {
   id: string
   createAt: string
   title: string
   file: UploadImageType
   author: string
   description: string
}

export type DataType = {
   title: string
   file: FileList
   author: string
   description: string
}

export type BlogType = {
   title: string
   file: UploadImageType
   author: string
   description: string
}

export type BlogsType = {
   id: string
   title: string
   file: UploadImageType
   author: string
   createdAt: string
   description: string
}