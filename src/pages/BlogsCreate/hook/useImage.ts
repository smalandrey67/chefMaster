import { ChangeEvent, useState } from 'react'

import { UseImageType } from '../../../@types/Hooks'

import { useUploadImageMutation } from '../../../services/ImageUploadService'

export const useImage = (): UseImageType => {
   const [uploadImage, { data: image, error: errorImage, isLoading }] = useUploadImageMutation()
   const [fileName, setFileName] = useState<string>('')

   const changeFileHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const files: FileList | null = e.target.files

      if (files) {
         setFileName(files[0].name)

         const formData = new FormData()

         formData.append('file', files[0])
         formData.append('upload_preset', 'ees8ffne')

         uploadImage(formData)
      }
   }
   
   return { 
      changeFileHandler, 
      fileName, 
      setFileName, 
      image,
      isLoading, 
      errorImage
   }
}
