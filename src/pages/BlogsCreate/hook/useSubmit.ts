import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UploadImageType } from '../../../@types/UploadImage'
import { BlogType, DataType } from '../../../@types/Blogs'
import { UseSubmitType } from '../../../@types/Hooks'

import { useAppDispatch } from '../../../hooks/useRedux'
import { uploadBlogAsync } from '../../../store/slices/uploadBlog/uploadBlogAsync'
import { resetUrl } from '../../../store/slices/uploadImage/uploadImageSlice'

export const useSubmit = (
   url: UploadImageType | null,
   setFileName: React.Dispatch<React.SetStateAction<string>>,
   reset: UseFormReset<DataType>,
): UseSubmitType => {
   
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const submitHandler: SubmitHandler<DataType> = (data): void => {
      if (url) {
         const post: BlogType = { ...data, file: url }

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
      submitHandler,
   }
}