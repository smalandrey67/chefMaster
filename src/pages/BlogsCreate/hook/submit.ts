import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UploadImageType } from '../../../types/UploadImage'
import { BlogType, DataType } from '../../../types/Blogs'
import { UseSubmitType } from '../../../types/Hooks'

import { useAppDispatch } from '../../../hooks/useRedux'
import { uploadBlogAsync } from '../../../store/requests/uploadBlogAsync'
import { resetUrl } from '../../../store/slices/uploadImageSlice'

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

         dispatch(uploadBlogAsync(post))
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