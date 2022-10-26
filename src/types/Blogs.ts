export type BlogsResultTypeType = {
  title: string
  file: string
  author: string
  description: string
  avatar: string
  id: string
}
export type SubmitBlogType = {
  title: string
  file: FileList
  author: string
  description: string
}
export type BlogCardPropsType = Omit<BlogsResultTypeType, 'id'>
export type PreparedPostType = {
  title: string
  file: string
  author: string
  description: string
  avatar: string | undefined
}
export type UploadImageResponseType = {
  secure_url: string
}
