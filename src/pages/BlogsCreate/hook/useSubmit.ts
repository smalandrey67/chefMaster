import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { UploadImageType } from '../../../@types/UploadImage'
import { PostType, SubmitBlogType } from '../../../@types/Blogs'
import { UseSubmitType } from '../../../@types/Hooks'

import { useAppDispatch } from '../../../hooks/useRedux'
import { uploadBlogAsync } from '../../../store/slices/uploadBlog/uploadBlogAsync'
import { resetUrl } from '../../../store/slices/uploadImage/uploadImageSlice'

export const useSubmit = (
   url: UploadImageType | null,
   setFileName: React.Dispatch<React.SetStateAction<string>>,
   reset: UseFormReset<SubmitBlogType>
): UseSubmitType => {
   
   const dispatch = useAppDispatch()
   const navigate: NavigateFunction = useNavigate()

   const submitHandler: SubmitHandler<SubmitBlogType> = (data): void => {
      if (url) {
         const post: PostType = { ...data, file: url }

         dispatch(uploadBlogAsync({ post, navigateHandler }))
         dispatch(resetUrl())

         setFileName('')
         reset()
      }
   }

   const navigateHandler = (): void => {
      navigate('/blogs')
   }

   return {
      submitHandler
   }
}