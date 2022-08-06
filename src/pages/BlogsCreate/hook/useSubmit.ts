import { Dispatch, SetStateAction, useEffect } from 'react'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { UploadImageType } from 'types/UploadImage'
import { PostSubmit, SubmitBlogType } from 'types/Blogs'
import { UseSubmitType } from 'types/Hooks'

import { useUploadBlogMutation } from 'services/BlogsService'
import { useRedirect } from 'hooks/useRedirect'

export const useSubmit = (
   image: UploadImageType | undefined,
   setFileName: Dispatch<SetStateAction<string>>,
   reset: UseFormReset<SubmitBlogType>
): UseSubmitType => {
   const [uploadBlog, { error: errorBlog, isSuccess }] = useUploadBlogMutation()
   const navigateHandler = useRedirect()

   useEffect(() => {
      if (isSuccess) {
         navigateHandler('/blogs')
      }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess])

   const submitHandler: SubmitHandler<SubmitBlogType> = (data): void => {
      if (image) {
         const post: PostSubmit = { ...data, file: image.secure_url, createdAt: new Date().toISOString }

         uploadBlog(post)

         setFileName('')
         reset()
      }
   }

   return {
      errorBlog,
      submitHandler
   }
}