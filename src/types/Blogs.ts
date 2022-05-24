export type BlogsDesciptionType = {
   id: string
   subTitle: string 
   information: string
}

export type BlogsType = {
   id?: string
   title: string
   image: string
   author: string
   description: BlogsDesciptionType[]
}