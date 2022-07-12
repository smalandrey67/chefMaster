import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { UploadImageType } from '../../../@types/UploadImage'
import { PostSubmit, SubmitBlogType } from '../../../@types/Blogs'
import { UseSubmitType } from '../../../@types/Hooks'

import { useUploadBlogMutation } from '../../../services/BlogsService'
import { useRedirect } from '../../../hooks/useRedirect'

export const useSubmit = (
   image: UploadImageType | undefined,
   setFileName: React.Dispatch<React.SetStateAction<string>>,
   reset: UseFormReset<SubmitBlogType>
): UseSubmitType => {
   const [uploadBlog, { error: errorBlog }] = useUploadBlogMutation()
   const { navigateHandler } = useRedirect()

   const submitHandler: SubmitHandler<SubmitBlogType> = async (data): Promise<void> => {
      if (image) {
         const post: PostSubmit = { ...data, file: image.secure_url }

         await uploadBlog(post).unwrap()
         
         navigateHandler('/blogs')
         setFileName('')
         reset()
      }
   }

   return {
      errorBlog,
      submitHandler
   }
}