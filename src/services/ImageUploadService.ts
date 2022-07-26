import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { UploadImageType } from 'types/UploadImage'

export const imageUploadApi = createApi({
   reducerPath: 'imageUploadService',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BLOGS_UPLOAD_URL }),
   endpoints: (builder) => ({
      uploadImage: builder.mutation<UploadImageType, FormData>({
         query: (data) => ({
            url: '/upload',
            method: 'POST',
            body: data
         })
      })
   })
})

export const { useUploadImageMutation } = imageUploadApi