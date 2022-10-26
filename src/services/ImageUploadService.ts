import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { config } from 'config'

import { UploadImageResponseType } from 'types/Blogs'

export const imageUploadApi = createApi({
  reducerPath: 'imageUploadService',
  baseQuery: fetchBaseQuery({ baseUrl: config.cloudinary }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<string, FormData>({
      query: (data) => ({
        url: '/upload',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: UploadImageResponseType): string => response.secure_url
    })
  })
})

export const { useUploadImageMutation } = imageUploadApi
