import { ChangeEvent } from 'react'

import { useUploadImageMutation } from 'services/ImageUploadService'

export const useFileChange = () => {
   const [uploadImage, { data: profilePhotoUrl, error: errorOfUploadFile, isLoading }] = useUploadImageMutation()
   
   const changeFileHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const files = e.target.files

      if (files) {
         const formData = new FormData()

         formData.append('file', files[0])
         formData.append('upload_preset', 'ees8ffne')

         uploadImage(formData)
      }
   }

   return {
      changeFileHandler,
      profilePhotoUrl,
      errorOfUploadFile,
      isLoading
   }
}