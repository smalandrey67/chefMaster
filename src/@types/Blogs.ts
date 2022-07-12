import { UploadImageType } from './UploadImage'

export type BlogsType = {
   title: string;
   file: UploadImageType;
   author: string;
   description: string;
   avatar: string;
   id: string;
   createdAt: string;
}

export type SubmitBlogType = {
   title: string;
   file: FileList;
   author: string;
   description: string;
}

export type BlogType = Omit<BlogsType, 'createdAt' | 'id'>

export type PostType = Omit<BlogsType, 'avatar' | 'createdAt' | 'id'>

export type PostSubmit = {
   title: string;
   file: string;
   author: string;
   description: string;
}

export type UploadBlogType = Omit<BlogsType, 'avatar' | 'createdAt'>

