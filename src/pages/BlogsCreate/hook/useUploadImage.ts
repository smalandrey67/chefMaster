import { ChangeEvent, useState } from 'react'

import { UseUploadImageReturnsType } from 'types/Hooks'

import { useUploadImageMutation } from 'services/ImageUploadService'

export const useUploadImage = (): UseUploadImageReturnsType => {
   const [uploadUserProfilePhoto, { data: userPhoto, error: errorUploadingImage, isLoading }] = useUploadImageMutation()
   const [fileName, setFileName] = useState<string>('')

   const changeFileHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const files = e.target.files

      if (files) {
         setFileName(files[0].name)

         const formData = new FormData()

         formData.append('file', files[0])
         formData.append('upload_preset', 'ees8ffne')

         uploadUserProfilePhoto(formData)
      }
   }

   return {
      changeFileHandler,
      fileName,
      setFileName,
      userPhoto,
      isLoading,
      errorUploadingImage
   }
}