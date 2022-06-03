import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UploadImageType } from '../../../models/UploadImage'
import { BlogType, DataType } from '../../../models/Blogs'
import { UseSubmitType } from '../../../models/Hooks'

import { useAppDispatch } from '../../../hooks/useRedux'
import { uploadBlogA } from '../../../store/slices/uploadBlog/uploadBlogA'
import { resetUrl } from '../../../store/slices/uploadImage/uploadImageS'

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

         dispatch(uploadBlogA(post))
         dispatch(resetUrl())

         setFileName('')
         navigate('/blogs')
         reset()
      }
   }

   return {
      submitHandler,
   }
}