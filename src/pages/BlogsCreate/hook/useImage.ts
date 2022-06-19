import { ChangeEvent, useState } from 'react'

import { uploadImageAsync } from '../../../store/slices/uploadImage/uploadImageAsync'
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'

import { UseImageType } from '../../../@types/Hooks'

export const useImage = (): UseImageType => {
   const [fileName, setFileName] = useState<string>('')

   const dispatch = useAppDispatch()
   const { url, status, error } = useAppSelector(state => state.uploadImage)

   const imageHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const files: FileList | null = e.target.files

      if (files) {
         setFileName(files[0].name)

         const formData = new FormData()

         formData.append('file', files[0])
         formData.append('upload_preset', 'ees8ffne')

         dispatch(uploadImageAsync(formData))
      }
   }

   return { 
      imageHandler, 
      fileName, 
      setFileName, 
      url,
      status, 
      error
   }
}
